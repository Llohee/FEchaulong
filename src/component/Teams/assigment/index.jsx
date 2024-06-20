import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Passdue from "./passdue/passdue";
import Upcoming from "./upcoming/upcoming";
import Compeleted from "./compeleted/compeleted";
import { useLoginForm } from "../../../api/login-api";
import CreateAssignment from "./create/createAssignment";

const Assignments = () => {
  const { userRole } = useLoginForm();
  const assigment = [
    {
      title: "Đang diễn ra",
      content: <Upcoming />,
    },
    {
      title: "Đã hết hạn",
      content: <Passdue />,
    },
    {
      title: "Đã hoàn thành",
      content: <Compeleted />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sub_chil_container text-black h-screen">
        <div className="flex justify-between p-4 h-7">
          <div className="">Bài tập</div>
        </div>
        <div className="h-[2px] bg-violet-300 rounded-3xl mx-4 my-6"></div>
        <Tab.Group>
          <div className="flex justify-between m-2 h-12">
            <Tab.List className="flex gap-8">
              {assigment.map(({ title }) => (
                <Tab
                  key={title}
                  className={({ selected }) =>
                    selected
                      ? "bg-violet-400 p-2 rounded-lg"
                      : "p-2 hover:bg-violet-300 rounded-lg"
                  }
                  onFocus={null}
                >
                  {title}
                </Tab>
              ))}
            </Tab.List>
            {userRole.includes("admin") ? (
              <button
                className="bg-slate-200 p-2 rounded-lg"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Tạo mới bài tập
              </button>
            ) : (
              <></>
            )}
          </div>
          <Tab.Panels>
            {assigment.map(({ title, content }) => (
              <Tab.Panel key={title}>{content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      {isOpen && (
        <CreateAssignment isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Assignments;
