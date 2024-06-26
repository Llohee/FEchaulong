import React from "react";
import { Modal } from "../../../ui/modal/modal";
import TeamCreateForm from "./team-create-form";

const CreateTeam = ({ isOpen, closeModal }) => {
  return (
    <Modal
      title={
        <div className="w-full flex gap-3 items-center">
          <div className="grow text-heading-7 text-typography-title">
            Tạo mới lớp học
          </div>
        </div>
      }
      isOpen={isOpen}
      closeModal={closeModal}
      // size="large"
    >
     <TeamCreateForm closeModal={closeModal} />
    </Modal>
  );
};

export default CreateTeam;
