import React from "react";
import { Modal } from "../../../../ui/modal/modal";
import AssignmentCreateForm from "./formCreate";

const CreateAssignment = ({ isOpen, closeModal }) => {
  return (
    <Modal
      title={
        <div className="w-full flex gap-3 items-center">
          <div className="grow text-heading-7 text-typography-title">
            Tạo mới bài tập
          </div>
        </div>
      }
      isOpen={isOpen}
      closeModal={closeModal}
      // size="large"
    >
      <AssignmentCreateForm closeModal={closeModal} />
    </Modal>
  );
};

export default CreateAssignment;
