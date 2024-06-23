import React from "react";
import { ConfirmModal } from "../../../ui/confirm/confirm-modal";
import { useGetAllStudent } from "../../../api/students-api";

const ConfirmcloseModal = ({ closeModal, isOpen, closeForm }) => {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title={`Thoát mà không lưu`}
      description={`Xác nhận thoát`}
      type="Info"
      action={() => {
        closeForm();
      }}
      closeModal={closeModal}
    />
  );
};

export default ConfirmcloseModal;
