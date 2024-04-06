import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { FormLogin } from "../../animation/loginanimation";
import Loginsvg_5 from "../../images/Loginsvg_5.svg";
import LoginStudentForm from "./Student/loginform";
import LoginTeacherForm from "./teacher/loginform";

const LoginRegisterForm = () => {
  let [categories] = useState({
    Student: [
      {
        id: 1,
        title: "Sinh Viên",
        content: <LoginStudentForm />,
      },
    ],
    Teacher: [
      {
        id: 2,
        title: "Giảng Viên",
        content: <LoginTeacherForm />,
      },
    ],
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="absolute flex flex-col gap-12 m-auto w-full h-full z-50 "
    >
      <motion.div
        variants={FormLogin}
        custom={0}
        className="bg-[#2244a7] w-[500px] min-h-[461.78px] py-12 px-6 max-w-[100vw] rounded-lg m-auto md:border-2 md:shadow-2xlxl shadow-grey-9"
      >
        <div className="flex flex-col w-full items-center justify-center gap-10">
          <img src={Loginsvg_5} alt="" />
          <Tab.Group as={Fragment}>
            <Tab.List className="flex gap-10" onFocus={null}>
              {Object.keys(categories).map((category) => (
                <Tab
                onFocus={null}
                  key={category}
                  className={({ selected }) =>
                    selected
                      ? "text-white text-2xl border-b-2"
                      : "text-white text-xl"
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className="">
                  <ul>
                    {posts.map((post) => (
                      <div key={post.id}>{post.content}</div>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginRegisterForm;
