import React, { useEffect, useState } from "react";
import { useAssigment } from "../../../../api/assignment";
import { useParams } from "react-router-dom";
import moment from "moment";
import Assigment from "../assigment";
const Upcoming = () => {
  const { ActiveAssigments, activeAssigments } = useAssigment();
  const [isShowModalAssignment, setIsShowModelAssignment] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      ActiveAssigments(id);
    }
  }, [id]);
  const OpenAssignment = (assignmentId) => {
    setSelectedAssignmentId(assignmentId);
    setIsShowModelAssignment(true);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        {activeAssigments.map((act) => (
          <button
            onClick={() => OpenAssignment(act._id)}
            key={act._id}
            className="bg-violet-300/50 p-4 shadow-lg rounded-lg"
          >
            <div className="text-2xl">
              {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
            </div>
            <div className="">{act.name}</div>
            <div className="text-red-500">
              End Time:{" "}as
              {moment(act.end_time).format("dddd, DD-MM-YYYY hh:mm A")}
            </div>
          </button>
        ))}
      </div>
      <Assigment
        isOpen={isShowModalAssignment}
        closeModal={() => setIsShowModelAssignment(false)}
        selectedAssignmentId={selectedAssignmentId}
      />
    </>
  );
};

export default Upcoming;
