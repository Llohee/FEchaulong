import { useState } from "react";
import StuTable from "./table";
import Createstudent from "./modal/create-student";
import Button from "../ui/button/button";

const Student = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sub_container flex flex-col gap-4 !overflow-hidden">
      <div className="pt-8 px-6 flex flex-col gap-4 justify-end items-end">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-slate-600 flex items-center gap-2 border-2 rounded-md px-2 py-1 w-fit"
        >
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 32 32"
            version="1.1"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Icon-Set"
                  transform="translate(-360.000000, -1035.000000)"
                  fill="#ffffff"
                >
                  <path
                    d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z"
                    id="plus"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p className="text-white text-lg">Tạo mới học sinh</p>
        </button>
      </div>
      <div className="px-6">
        <StuTable />
      </div>
      {isOpen && (
        <Createstudent isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Student;
