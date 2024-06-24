import React, { useState } from "react";
import { useListSumit } from "../../../../api/lissubmit";
import { Table } from "antd";
import moment from "moment";

const Listnonsubmit = () => {
  const { getNoneSubmitssions } = useListSumit();
  console.log(getNoneSubmitssions);
  const [isOpen, setIsOpen] = useState(false);
  const [studentchoose, setStudentchoose] = useState();
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (description) => (!description ? "Không có mô tả" : description),
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      render: (score) => (!score ? "Không có điểm" : score),
    },
    {
      title: "Thời gian nộp",
      dataIndex: "submitted_time",
      key: "submitted_time",
      render: (submitted_time) =>
        submitted_time
          ? moment(submitted_time).format("HH:mm DD/MM/YYYY")
          : "Chưa nộp bài",
    },
  ];
  return (
    <div>
      <Table
        pagination={{ pageSize: 5, style: { color: "white" } }}
        dataSource={getNoneSubmitssions}
        columns={columns}
        className="custom-table"
      />
    </div>
  );
};

export default Listnonsubmit;
