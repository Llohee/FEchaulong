import React, { useCallback, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useGetAllTeams } from "../../../api/teams-api";
import TeamAvatar from "../../../ui/avatar/teamavatar";
import Home from "./home";
import NoteBook from "./notebook";
import ClassWork from "./classwork";
import Assignments from "../assigment";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import AddUser from "./modal/adduser";

const Team = () => {
  const { id } = useParams();
  const { getTeambyid, teamById } = useGetAllTeams();
  const [showModalAddUser, setShowModalAddUser] = useState(false);

  useEffect(() => {
    if (id) {
      getTeambyid(id);
    }
  }, [id]);
  const handleJoinRoom = useCallback(() => {
    window.open(`/room/${id}`);
  }, [id]);
  const location = useLocation();
  const categories = [
    {
      id: 1,
      title: "Trang chủ",
      content: <Home />,
      path: `/teams/team/${id}/home`,
    },
    {
      id: 2,
      title: "Ghi nhớ",
      content: <NoteBook />,
      path: `/teams/team/${id}/notebook`,
    },
    {
      id: 3,
      title: "Công việc",
      content: <ClassWork />,
      path: `/teams/team/${id}/classwork`,
    },
    {
      id: 4,
      title: "Bài tập",
      content: <Assignments />,
      path: `/teams/team/${id}/assignments`,
    },
  ];

  const [listMenuItems] = useState([
    {
      title: "Quản lý nhóm",
      link: "/profile",
      icon: (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Thêm thành viên",
      onClick: () => setShowModalAddUser(true),
      icon: (
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 64 64"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title></title>
            <path d="M24.76,28.1A10.35,10.35,0,1,1,35.1,17.75,10.36,10.36,0,0,1,24.76,28.1Zm0-16.69a6.35,6.35,0,1,0,6.34,6.34A6.35,6.35,0,0,0,24.76,11.41Z"></path>
            <path d="M24.76,56.59a28.11,28.11,0,0,1-16.4-5.22,2,2,0,0,1-.83-1.43c0-.28,0-.54,0-.82a17.26,17.26,0,1,1,34.51,0,7.31,7.31,0,0,1,0,.81,2,2,0,0,1-.83,1.44c-.68.48-1.39.94-2.1,1.36a2,2,0,1,1-2-3.45c.33-.2.66-.4,1-.61a13.25,13.25,0,0,0-26.49,0,24.13,24.13,0,0,0,13.25,3.92,24.87,24.87,0,0,0,3.67-.27,2,2,0,0,1,.61,4A27.84,27.84,0,0,1,24.76,56.59Z"></path>
            <path d="M47.85,30.54a2,2,0,0,1-2-2V15.24a2,2,0,0,1,4,0v13.3A2,2,0,0,1,47.85,30.54Z"></path>
            <path d="M54.5,23.89H41.2a2,2,0,0,1,0-4H54.5a2,2,0,0,1,0,4Z"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Link vào nhóm",
      link: "/update-password",
      icon: (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ]);
  return (
    <>
      <div className="sub_container h-screen overflow-hidden shadow-r shadow-2xl fixed w-96 z-50 bg-violet-200">
        <div className="py-4 px-2 col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-8">
            <div className="px-4">
              <Link to={`/teams/`}>
                <button className="flex gap-1 items-center bg-violet-300 duration-100 px-2 py-2 rounded-md hover:scale-110">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black hover:text-white"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0.95"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M20.0195 21.3199C22.5695 20.4399 23.0195 15.7199 23.0195 12.4099C23.0195 9.09992 22.5895 4.41001 20.0195 3.51001C17.3095 2.58001 9.01953 8.65991 9.01953 12.4099C9.01953 16.1599 17.3095 22.2499 20.0195 21.3199Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M1 18.92C1 20.3008 2.11929 21.42 3.5 21.42C4.88071 21.42 6 20.3008 6 18.92L6 5.92004C6 4.53933 4.88071 3.42004 3.5 3.42004C2.11929 3.42004 1 4.53933 1 5.92004L1 18.92Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>Tất cả các lớp</p>
                </button>
              </Link>
            </div>
            <div className="">
              <TeamAvatar name={teamById.name} size={"xl"} />
              <div className="h-[3px] bg-violet-300 rounded-3xl mx-4 mt-6"></div>
            </div>
          </div>
          <div classname="flex flex-col gap-2">
            <div className="flex justify-between items-center pr-4">
              <div className="text-2xl">{teamById.name}</div>
              <Menu
                as="div"
                className="relative inline-block text-left items-center z-[8000]"
              >
                <div className="flex flex-row gap-4">
                  <Menu.Button className="inline-flex w-full justify-center text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                          fill="#000000"
                        ></path>
                        <path
                          d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                          fill="#000000"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
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
                  <Menu.Items className="bg-violet-200 rounded-md absolute flex flex-col gap-0 right-0 origin-top-right shadow-2xl focus:outline-none z-[8000]">
                    {listMenuItems.map((val, index) => (
                      <Menu.Item key={index}>
                        <button
                          onClick={() => val.onClick?.()}
                          target="_parent"
                          className="m-1 flex gap-1 hover:rounded-md px-3 py-2 hover:bg-violet-300/50 active:bg-grey-4 focus:bg-grey-4"
                        >
                          <div className="my-auto text-typography-title">
                            {val.icon}
                          </div>

                          <div className="flex flex-col text-sm whitespace-nowrap">
                            {val.title}
                          </div>
                        </button>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <Tab.Group>
              <Tab.List className="flex flex-col gap-2 px-4 ml-2 mt-4">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    as={Link}
                    to={category.path}
                    className={({ selected }) =>
                      `menu-item text-black text-md ${
                        selected
                          ? "bg-violet-300/75 rounded-md text-left px-4 py-2"
                          : "text-left px-4 py-2 hover:bg-violet-300/50 rounded-md"
                      }`
                    }
                  >
                    {category.title}
                  </Tab>
                ))}
              </Tab.List>
              <div className="h-[3px] bg-violet-300 rounded-3xl mx-4 mt-6"></div>
              <Tab.Panels className="">
                {categories.map((category) => (
                  <Tab.Panel key={category.id}>
                    <Outlet />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      {showModalAddUser && (
        <AddUser
          isOpen={showModalAddUser}
          closeModal={() => {
            setShowModalAddUser(false);
          }}
        />
      )}
    </>
  );
};

export default Team;
