import React from "react";
import { ConfirmModal } from "../../../ui/confirm/confirm-modal";
import { useGetAllStudent } from "../../../api/students-api";

const ConfirmUpdateStudent = ({
  closeForm,
  closeModal,
  isOpen,
  studentDetail,
  handleSubmit,
}) => {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title={`Cập nhật học sinh ${studentDetail.fullname}`}
      description={`Thông tin cập nhật là chính xác`}
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

export default ConfirmUpdateStudent;
