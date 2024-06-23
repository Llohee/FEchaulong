import React, { useEffect, useState } from "react";
import { useListSumit } from "../../../../api/lissubmit";
import { Table } from "antd";
import moment from "moment";
import Score from "./score/score";
import { useParams } from "react-router-dom";

const ListSubmit = () => {
  const { getSubmitssions } = useListSumit();
  const { id, assignmentId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [studentchoose, setStudentchoose] = useState();
  const { getSubmitByUserId, submissions } = useListSumit();

  useEffect(() => {
    if (isOpen && studentchoose) {
      getSubmitByUserId(id, assignmentId, studentchoose);
    }
  }, [studentchoose, isOpen]);
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "user",
      key: "fullname",
      render: (user) => user.fullname,
    },
    {
      title: "Email",
      dataIndex: "user",
      key: "email",
      render: (user) => user.email,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (score) => !score ? 'Chưa có điểm' : score
    },
    {
      title: "Thời gian nộp",
      dataIndex: "submitted_time",
      key: "submitted_time",
      render: (submitted_time) => moment(submitted_time).format("HH:mm DD/MM/YYYY"),
    },
    {
      title: "Hành động",
      key: "action",
      dataIndex: "user",
      render: (user) => (
        <div className="flex gap-4">
          <button
            onClick={() => {
              setIsOpen(true);
              setStudentchoose(user._id);
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7894_103644)">
                <path d="M13.7971 15.4076H2.20276C2.04901 15.4076 1.90156 15.3465 1.79284 15.2378C1.68412 15.129 1.62305 14.9816 1.62305 14.8278C1.62305 14.6741 1.68412 14.5266 1.79284 14.4179C1.90156 14.3092 2.04901 14.2481 2.20276 14.2481H13.7971C13.9508 14.2481 14.0983 14.3092 14.207 14.4179C14.3157 14.5266 14.3768 14.6741 14.3768 14.8278C14.3768 14.9816 14.3157 15.129 14.207 15.2378C14.0983 15.3465 13.9508 15.4076 13.7971 15.4076Z" />
                <path d="M8.33963 4.39296L3.53205 9.20054C3.45772 9.27491 3.40502 9.36809 3.37959 9.47011L2.20276 13.0887L5.82135 11.9119C5.92337 11.8864 6.01655 11.8337 6.09091 11.7594L10.8985 6.95182L8.33963 4.39296Z" />
                <path d="M13.0475 3.9831L11.3084 2.24395C11.1996 2.13527 11.0522 2.07422 10.8985 2.07422C10.7448 2.07422 10.5973 2.13527 10.4886 2.24395L9.15935 3.57324L11.7182 6.1321L13.0475 4.80282C13.1562 4.6941 13.2172 4.54668 13.2172 4.39296C13.2172 4.23924 13.1562 4.09181 13.0475 3.9831Z" />
              </g>
            </svg>
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={getSubmitssions} columns={columns} />
      {isOpen && submissions && (
        <Score
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
          }}
          studentchoose={submissions}
        />
      )}
    </div>
  );
};

export default ListSubmit;
