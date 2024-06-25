import React, { useEffect } from "react";
import { useAssigment } from "../../../../api/assignment";
import { useNavigate, useParams } from "react-router-dom";
import { useLoginForm } from "../../../../api/login-api";
import Loading from "../../../../ui/Loading/loading";
import moment from "moment";

const Compeleted = () => {
  const { loading, CompeletedAsssginments, compeletedAssignment } =
    useAssigment();
  const { userLogin } = useLoginForm();
  console.log(compeletedAssignment);
  const { id } = useParams();
  useEffect(() => {
    if ((id, userLogin._id)) {
      CompeletedAsssginments(id, userLogin._id);
    }
  }, [id, userLogin._id]);
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
            {compeletedAssignment.map((act) => (
              <button
                onClick={() =>
                  navigate(`/teams/team/${id}/assignments/${act.homeworkId}`)
                }
                key={act._id}
                className="bg-slate-200/50 p-4 shadow-lg rounded-lg col-span-1"
              >
                <div className="text-2xl">
                  Ngày bắt đầu: {moment(act.start_time).format("dddd, DD-MM-YYYY hh:mm A")}
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

export default Compeleted;
