import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAssigment } from "../../../api/assignment";
import moment from "moment";
import { Button, Col, Form, Row, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useLoginForm } from "../../../api/login-api";
import Listnonsubmit from "./list/listnonsubmit";
import ListSubmit from "./list/listsubmit";
import { Tab } from "@headlessui/react";

const Assignment = () => {
  const { id } = useParams();
  const assigment = [
    {
      title: "Đề bài",
      content: <AssignmentContent />,
    },
    {
      title: "Đã nộp bài",
      content: <ListSubmit />,
    },
    {
      title: "Chưa nộp bài",
      content: <Listnonsubmit />,
    },
  ];
  return (
    <div className="sub_chil_container max-h-screen">
      <Tab.Group>
        <div className="flex justify-between h-12 mt-4">
          <Tab.List className="flex gap-8">
            <Link to={`/teams/team/${id}/assignments`} className="">
              <button className="flex gap-1 items-center bg-slate-600 duration-100 px-2 py-2 rounded-md text-white hover:scale-x-110">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="-0.5 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      stroke="#ffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M1 18.92C1 20.3008 2.11929 21.42 3.5 21.42C4.88071 21.42 6 20.3008 6 18.92L6 5.92004C6 4.53933 4.88071 3.42004 3.5 3.42004C2.11929 3.42004 1 4.53933 1 5.92004L1 18.92Z"
                      stroke="#ffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p>Tất cả các lớp</p>
              </button>
            </Link>
            {assigment.map(({ title }) => (
              <Tab
                key={title}
                className={({ selected }) =>
                  selected
                    ? "bg-slate-400 p-2 rounded-lg text-white min-w-[150px]"
                    : "p-2 hover:bg-slate-400 rounded-lg text-white min-w-[150px]"
                }
                onFocus={null}
              >
                {title}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-6">
          {assigment.map(({ title, content }) => (
            <Tab.Panel key={title}>{content}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const AssignmentContent = () => {
  const { id, assignmentId } = useParams();
  const { getAssignmentById, getbyid, onSubmitAssigment, deleteAssignment } =
    useAssigment();
  useEffect(() => {
    if (id && assignmentId) {
      getbyid(id, assignmentId);
    }
  }, [id, assignmentId]);
  const getBase64ImageSrc = (base64Data) => {
    return `data:image/png;base64,${base64Data}`;
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="text-2xl text-white">Tên: {getAssignmentById.name}</div>
        <div className="flex text-red-300">
          <p className="pr-2">Hết hạn:</p>
          {moment(getAssignmentById.end_time).format(
            "dddd, DD-MM-YYYY hh:mm A"
          )}
        </div>
        {getAssignmentById.image && (
          <img
            src={getBase64ImageSrc(getAssignmentById.image)}
            alt="Ảnh"
            style={{ maxWidth: "50%" }}
          />
        )}
        <div className="text-lg text-white">
          Mô tả: {getAssignmentById.description}
        </div>
      </div>
      <FormAssignment />
    </div>
  );
};

const FormAssignment = () => {
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
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (id && assignmentId) {
      getbyid(id, assignmentId).then((data) => {
        setAssignment(data);
        setDataFetched(true);
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
      setSubmit(false);
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
    <div className="">
      <Form
        form={form}
        onFinish={handleSubmit}
        className="flex flex-col gap-2 border-2 p-3 rounded-md shadow-md m-3"
      >
        <Form.Item className="">
          <div className="flex justify-between w-full px-6">
            <p className="text-xl text-white">Bài tập của tôi </p>
            {userSubmitted ? (
              <Button onClick={handledeleteSubmit}>Hoàn tác nộp bài</Button>
            ) : (
              <Button
                htmlType="submit"
                loading={submitting}
                className="bg-violet-300 hover:bg-violet-300 text-black"
              >
                Nộp bài
              </Button>
            )}
          </div>
        </Form.Item>
        <Col className="flex flex-col gap-2">
          <Row className="text-white"> Ghi chú bài tập</Row>
          <Form.Item name="description">
            <TextArea
              rows={4}
              disabled={userSubmitted}
              className="text-white"
            />
          </Form.Item>
        </Col>
        <Col className="flex flex-col gap-2">
          <Row className="text-white"> Tải ảnh</Row>
          <Form.Item name="image" valuePropName="file">
            <Upload
              beforeUpload={() => false}
              onChange={handleFileChange}
              disabled={userSubmitted}
            >
              <Button
                icon={<UploadOutlined />}
                disabled={userSubmitted}
                className="text-white"
              >
                Select Image
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
};

export default Assignment;
