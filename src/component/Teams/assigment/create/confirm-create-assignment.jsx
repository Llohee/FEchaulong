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
      // description={`Thông tin cập nhật là chính xác`}
      type="Info"
      action={() => {
        closeModal();
        closeForm();
        handleSubmit();
      }}
      closeModal={closeModal}
    />
  );
};

export default ConfirmCreateAssignment;
