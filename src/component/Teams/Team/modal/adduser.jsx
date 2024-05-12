import React from "react";
import { Modal } from "../../../../ui/modal/modal";
import SeclectUser from "./select-user";

const AddUser = ({ isOpen, closeModal }) => {
  return (
    <Modal
      title={
        <div className="w-full flex gap-3 items-center">
          <div className="grow text-heading-7 text-typography-title">
            Thêm thành viên
          </div>
        </div>
      }
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div className="px-2">
        <SeclectUser closeModal={closeModal} />
      </div>
    </Modal>
  );
};

export default AddUser;
