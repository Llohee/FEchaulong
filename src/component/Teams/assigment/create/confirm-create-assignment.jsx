import React from "react";
import { ConfirmModal } from "../../../../ui/confirm/confirm-modal";

const ConfirmCreateAssignment = ({
  closeForm,
  closeModal,
  isOpen,
  handleSubmit,
}) => {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title={`Xác nhận tạo mới bài tập`}
      type="Info"
      action={() => {
        handleSubmit();
        closeModal();
        closeForm();
      }}
      closeModal={closeModal}
    />
  );
};

export default ConfirmCreateAssignment;
