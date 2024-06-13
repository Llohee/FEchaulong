import { Tab } from "@headlessui/react";
import React from "react";
import Passdue from "./passdue/passdue";
import Upcoming from "./upcoming/upcoming";
import Compeleted from "./compeleted/compeleted";
import { useLoginForm } from "../../../api/login-api";

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
    }
  ];
  return (
    <div className="sub_chil_container text-black h-screen">
      <Tab.Group>
        <div className="flex justify-between m-2">
          <Tab.List className="flex gap-8">
            {assigment.map(({ title }) => (
              <Tab key={title} className="text-black" onFocus={null}>
                {title}
              </Tab>
            ))}
          </Tab.List>
          {userRole.includes("admin") ? (
            <button className="bg-slate-200 p-2 rounded-lg">
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
  );
};

export default Assignments;
