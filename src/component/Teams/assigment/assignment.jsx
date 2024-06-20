import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAssigment } from "../../../api/assignment";
import moment from "moment";
import { Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useLoginForm } from "../../../api/login-api";

const Assignment = () => {
  const { id, assignmentId } = useParams();
  const { getAssignmentById, getbyid, onSubmitAssigment, deleteAssignment } =
    useAssigment();
  const { userLogin } = useLoginForm();
  const [assignment, setAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [submitton, setSubmittion] = useState([]);
  const [form] = Form.useForm();
  const [deleted, setDeleted] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [enteredPage, setEnteredPage] = useState(false);
  const [dataFetched, setDataFetched] = useState(false); // Thêm state mới

  useEffect(() => {
    if (id && assignmentId) {
      getbyid(id, assignmentId).then((data) => {
        setAssignment(data);
        setDataFetched(true); // Đánh dấu rằng dữ liệu đã được lấy
      });
      setEnteredPage(true);
    }
  }, [id, assignmentId, deleted, submit]);

  const handleFileChange = ({ file }) => {
    setFile(file);
  };

  const handleSubmit = (values) => {
    onSubmitAssigment(
      id,
      assignmentId,
      values,
      file,
      setSubmitting,
      setUserSubmitted
    );
    setSubmit(true);
  };

  const handledeleteSubmit = () => {
    deleteAssignment(id, assignmentId, submitton._id).then(() => {
      setDeleted(true);
      setUserSubmitted(false);
      form.resetFields();
      setSubmit(false); // Đặt lại state submit
    });
  };

  useEffect(() => {
    if (deleted || submit) {
      getbyid(id, assignmentId).then((data) => {
        setAssignment(data);
      });
    }
  }, [enteredPage, id, assignmentId, deleted, submit]);

  useEffect(() => {
    if (getAssignmentById && dataFetched) {
      // Kiểm tra dataFetched trước khi sử dụng dữ liệu
      const submittedUsers = getAssignmentById.submitted_users || [];
      const userSubmission = submittedUsers.find(
        (submission) => submission.user === userLogin._id
      );
      setSubmittion(userSubmission);

      if (userSubmission) {
        setUserSubmitted(true);
        form.setFieldsValue({
          description: userSubmission.description,
          image: userSubmission.image,
        });
        setFile(userSubmission.image);
      }
    }
  }, [getAssignmentById, dataFetched]);

  return (
    <div className="sub_chil_container">
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item>
          <div className="flex justify-between mx-auto py-4">
            <Link to={`/teams/team/${id}/assignments`}>
              <button className="flex gap-1 items-center bg-violet-300 duration-100 px-2 py-2 rounded-md text-black">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="-0.5 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black hover:text-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.95"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M20.0195 21.3199C22.5695 20.4399 23.0195 15.7199 23.0195 12.4099C23.0195 9.09992 22.5895 4.41001 20.0195 3.51001C17.3095 2.58001 9.01953 8.65991 9.01953 12.4099C9.01953 16.1599 17.3095 22.2499 20.0195 21.3199Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M1 18.92C1 20.3008 2.11929 21.42 3.5 21.42C4.88071 21.42 6 20.3008 6 18.92L6 5.92004C6 4.53933 4.88071 3.42004 3.5 3.42004C2.11929 3.42004 1 4.53933 1 5.92004L1 18.92Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p>Tất cả các lớp</p>
              </button>
            </Link>
            {userSubmitted ? (
              <Button onClick={handledeleteSubmit}>Hoàn tác nộp bài</Button>
            ) : (
              <Button  htmlType="submit" loading={submitting} className="bg-violet-300 hover:bg-violet-300 text-black">
                Nộp bài
              </Button>
            )}
          </div>
        </Form.Item>
        <div className="text-xl">{getAssignmentById.name}</div>
        <div className="flex">
          <p className="pr-2">End Time:</p>
          {moment(getAssignmentById.end_time).format(
            "dddd, DD-MM-YYYY hh:mm A"
          )}
        </div>
        <div className="text-xl">{getAssignmentById.image}</div>
        <div className="">
          <div className="">Bài tập của tôi</div>
          <Form.Item name="description" label="Ghi chú bài tập">
            <TextArea rows={4} disabled={userSubmitted} />
          </Form.Item>
          <Form.Item
            name="image"
            label="Tải ảnh"
            valuePropName="file"
            rules={[{ message: "Please upload an image" }]}
          >
            <Upload
              beforeUpload={() => false}
              onChange={handleFileChange}
              maxCount={1}
              disabled={userSubmitted}
            >
              <Button icon={<UploadOutlined />} disabled={userSubmitted}>
                Select Image
              </Button>
            </Upload>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Assignment;
