import React, { useCallback, useEffect } from "react";
import { useAssigment } from "../../../../api/assignment";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Assigment from "../assigment";

const Passdue = () => {
  const { InactiveAssigments, inactiveAssigments } = useAssigment();
  const { Teamid } = useParams();
  useEffect(() => {
    if (Teamid) {
      InactiveAssigments(Teamid);
    }
  }, [Teamid]);
  console.log(inactiveAssigments)
 const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-5">
      {inactiveAssigments.map((act) => (
        <button
          key={act._id}
          className="bg-violet-300/50 p-4 shadow-lg rounded-lg hover:cursor-pointer"
          onClick={() => navigate(`teams/${Teamid}/assignment/${act._id}`)}
        >
          <div className="text-2xl">
            {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
          </div>
          <div className="">{act.name}</div>
          <div className="text-red-500">
            End Time: {moment(act.end_time).format("dddd, DD-MM-YYYY hh:mm A")}
          </div>
        </button>
      ))}
      
    </div>
  );
};

export default Passdue;
