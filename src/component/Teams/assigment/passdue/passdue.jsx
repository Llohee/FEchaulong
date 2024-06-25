import React, { useCallback, useEffect } from "react";
import { useAssigment } from "../../../../api/assignment";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Loading from "../../../../ui/Loading/loading";

const Passdue = () => {
  const { InactiveAssigments, inactiveAssigments, loading } = useAssigment();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      InactiveAssigments(id);
    }
  }, [id]);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-5">
      {loading ? (
        <div className="col-span-2">
          <Loading />
        </div>
      ) : (
        <>
          {inactiveAssigments.map((act) => (
            <button
              onClick={() =>
                navigate(`/teams/team/${id}/assignments/${act._id}`)
              }
              key={act._id}
              className="bg-slate-200/50 p-4 shadow-lg rounded-lg col-span-1"
            >
              <div className="text-2xl">
                {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
              </div>
              <div className="">{act.name}</div>
              <div className="text-red-500">
                End Time:{" "}
                {moment(act.end_time).format("dddd, DD-MM-YYYY hh:mm A")}
              </div>
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Passdue;
