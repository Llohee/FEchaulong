import React, { useEffect, useState } from "react";
import { useLoginForm } from "../../api/login-api";
import Avatar from "../../ui/avatar/avatar";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeSVG from "../../images/Homesvg.svg";

const Header = () => {
  const navigate = useNavigate();
  const [goLogout, setGoLogout] = useState(false);
  useEffect(() => {
    if (!goLogout) return;
    setGoLogout(false);
    navigate("/logout");
  }, [goLogout]);
  const { userLogin } = useLoginForm();
  const [listMenuItems] = useState([
    {
      title: "Thông tin",
      link: "/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="18"
          height="18"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
      name: userLogin.fullname,
      email: userLogin.email,
    },
    {
      title: "Cập nhật mật khẩu",
      link: "/update-password",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="18"
          height="18"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
      ),
    },
    {
      title: "Đăng xuất",
      onClick: () => setGoLogout(true),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="19"
          height="19"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    }, 
  ]);

  return (
    <div className="bg-violet-500 black h-14 w-screen flex justify-between items-center px-4 top-0 fixed z-[1000]">
      <button onClick={() => navigate("/home")}>
        <img src={HomeSVG} className="w-10 h-10" />
      </button>
      <div className="inline-flex gap-4 items-center justify-end">
        <div className="flex-col">
          <div className="text-white text-label-1">{userLogin.fullname}</div>
          <div className="text-grey-2 underline underline-offset-1 text-label-5">{userLogin.email}</div>
        </div>
        <Menu
          as="div"
          className="relative inline-block text-left items-center z-[8000]"
        >
          <div className="flex flex-row gap-4">
            <Menu.Button className="inline-flex w-full justify-center text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <Avatar name={userLogin.fullname} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="border border-grey-4 p-2 rounded-md absolute flex flex-col gap-0 right-0 mt-2 w-60 origin-top-right divide-y-[1px] divide-grey-3 bg-grey-1 shadow-lg focus:outline-none z-[8000]">
              {listMenuItems.map((val, index) => (
                <Menu.Item key={index}>
                  {val.link ? (
                    <Link
                      onClick={() => val.onClick?.()}
                      href={val.link ?? "#"}
                      target="_parent"
                      className="flex gap-2 hover:rounded-md px-3 py-2 hover:bg-grey-3 active:bg-grey-4 focus:bg-grey-4"
                    >
                      <div className="my-auto text-typography-title">
                        {val.icon}
                      </div>

                      <div className="flex flex-col ">
                        {!val.name && (val.title ?? "")}
                        <div>{val.name && val.name}</div>
                        <div className="text-[14px] truncate max-w-[180px]">
                          {val.email && val.email}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => val.onClick?.()}
                      className="flex gap-2 hover:rounded-md px-3 py-2 hover:bg-grey-3 active:bg-grey-4 focus:bg-grey-4"
                    >
                      <div className="my-auto text-typography-title">
                        {val.icon}
                      </div>
                      <div>{val.title ?? ""}</div>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
    
  );
};

export default Header;
