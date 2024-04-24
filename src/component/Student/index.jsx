import { useState } from "react";
import StuTable from "./table";
import Createstudent from "./modal/create-student";
import Button from "../ui/button/button";

const Student = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sub_container flex flex-col gap-4">
      <div className="text-heading-5">Thông tin học sinh</div>
      <Button
        size={"small"}
        intent={"primary"}
        className=" gap-2 items-center"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Tạo mới
      </Button>
      <StuTable />
      {isOpen && (
        <Createstudent isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Student;
