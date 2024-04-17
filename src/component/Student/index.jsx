import { useState } from "react";
import StuTable from "./table";
import Createstudent from "./modal/create-student";

const Student = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Tạo mới
      </button>
      <StuTable />
      <Createstudent isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Student;
