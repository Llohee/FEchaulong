import { Tab } from "@headlessui/react";
import React from "react";
import Passdue from "./passdue/passdue";
import Upcoming from "./upcoming/upcoming";
import Compeleted from "./compeleted/compeleted";
import { useLoginForm } from "../../../api/login-api";

const Assignments = () => {
  const { userRole } = useLoginForm();
  console.log(userRole);
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex justify-between">
          <div className="flex gap-5 text-lg">
            <Tab>Đang diễn ra</Tab>
            <Tab>Đã hết hạn</Tab>
            <Tab>Đã hoàn thành</Tab>
          </div>
          {userRole.includes("admin") ? (
            <button className="bg-slate-200 p-2 rounded-lg">
              Tạo mới bài tập
            </button>
          ) : (
            <></>
          )}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Upcoming />
          </Tab.Panel>
          <Tab.Panel>
            <Passdue />
          </Tab.Panel>
          <Tab.Panel>
            <Compeleted />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Assignments;
