import React, { useEffect, useState } from "react";
import { useAssigment } from "../../../../api/assignment";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
const Upcoming = () => {
  const { ActiveAssigments, activeAssigments } = useAssigment();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      ActiveAssigments(id);
    }
  }, [id]);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap-2 gap-5">
        {activeAssigments.map((act) => (
          <button
            onClick={() => navigate(`/teams/team/${id}/assignments/${act._id}`)}
            key={act._id}
            className="bg-violet-300/50 p-4 shadow-lg rounded-lg"
          >
            <div className="text-2xl">
              {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
            </div>
            <div className="">{act.name}</div>
            <div className="text-red-500">
              End Time:
              {moment(act.end_time).format("dddd, DD-MM-YYYY hh:mm A")}
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Upcoming;
