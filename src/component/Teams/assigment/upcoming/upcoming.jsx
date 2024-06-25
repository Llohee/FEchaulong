import React, { useEffect, useState } from "react";
import { useAssigment } from "../../../../api/assignment";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Loading from "../../../../ui/Loading/loading";
const Upcoming = () => {
  const { ActiveAssigments, activeAssigments, loading } = useAssigment();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      ActiveAssigments(id);
    }
  }, [id]);
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {loading ? (
          <div className="col-span-2">
            <Loading />
          </div>
        ) : (
          <>
            {activeAssigments.map((act) => (
              <button
                onClick={() =>
                  navigate(`/teams/team/${id}/assignments/${act._id}`)
                }
                key={act._id}
                className="bg-slate-200/50 p-4 shadow-lg rounded-lg col-span-1"
              >
                <div className="text-2xl flex gap-2">
                 Ngày bắt đầu:{" "}
                  {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
                </div>
                <div className="">{act.name}</div>
                <div className="text-red-500">
                  Ngày kết thúc:{" "}
                  {moment(act.end_time).format("dddd, DD-MM-YYYY hh:mm A")}
                </div>
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Upcoming;
