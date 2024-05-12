import React from "react";
import { useGetAllTeams } from "../../../../api/teams-api";
import { useParams } from "react-router-dom";
import { ConfirmModal } from "../../../../ui/confirm/confirm-modal";

const ConfirmAddUser = ({ closeModal, isOpen, selected }) => {
  const { addUser } = useGetAllTeams();
  const id = useParams();
  const selectedIds = selected.map((user) => user._id);
  const AddUserToTeam = () => {
    if (id.id && selectedIds.length > 0) {
      addUser(id.id, selectedIds);
    }
  };
  return (
    <ConfirmModal
      isOpen={isOpen}
      title={`Thêm ${selected.length} thành viên vào nhóm`}
      description={``}
      type="Info"
      action={() => {
        closeModal();
        AddUserToTeam();
      }}
      closeModal={closeModal}
    />
  );
};

export default ConfirmAddUser;
