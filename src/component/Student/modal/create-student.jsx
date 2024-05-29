import React from "react";
import { Modal } from "../../../ui/modal/modal";
import UserCreateForm from "./user-create-form";

const Createstudent = ({ isOpen, closeModal }) => {
  return (
    <Modal
      title={
        <div className="w-full flex gap-3 items-center">
          <div className="grow text-heading-7 text-typography-title">
            Tạo mới học sinh
          </div>
        </div>
      }
      isOpen={isOpen}
      closeModal={closeModal}
      // size="large"
    >
      <UserCreateForm
        // form={formCreate}
        // register={register}
        closeModal={() => {
          closeModal();
        }}
      />
    </Modal>
  );
};

export default Createstudent;
