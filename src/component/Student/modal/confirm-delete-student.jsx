import React from "react";
import { ConfirmModal } from "../../../ui/confirm/confirm-modal";
import { useGetAllStudent } from "../../../api/students-api";

const ConfirmDeleteStudent = ({ closeModal, isOpen, studentDetail }) => {
  const { deleteStudent } = useGetAllStudent();
  return (
    <ConfirmModal
      isOpen={isOpen}
      title={`Xóa học sinh ${studentDetail.fullname}`}
      description={`Học sinh đã xóa sẽ không thể khôi phục`}
      type="Delete"
      action={() => {
        closeModal();
        deleteStudent(studentDetail._id);
      }}
      closeModal={closeModal}
    />
  );
};

export default ConfirmDeleteStudent;
