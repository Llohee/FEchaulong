import React, { useEffect } from "react";
import { Modal } from "../../../ui/modal/modal";
import { useParams } from "react-router-dom";
import { useAssigment } from "../../../api/assignment";
import moment from "moment";
import { useLoginForm } from "../../../api/login-api";
import { Col, Form, Input, Row } from "antd";
const Assigment = ({ isOpen, closeModal, selectedAssignmentId }) => {
  const { getTeambyid, getAssignmentById, deleteAssignment } = useAssigment();
  const { id } = useParams();
  useEffect(() => {
    if (selectedAssignmentId) {
      getTeambyid(id, selectedAssignmentId);
    }
  }, [selectedAssignmentId]);
  const { userLogin } = useLoginForm();

  const hasSubmitted = getAssignmentById?.submitted_users?.some(
    (submission) => submission.user === userLogin._id
  );
  const userSubmission = getAssignmentById?.submitted_users?.find(
    (submission) => submission.user === userLogin._id
  );
  console.log(userSubmission);
  const DeleteAssignment = () => {
    deleteAssignment(id, selectedAssignmentId, userSubmission.user);
    hasSubmitted()
  };
  return (
    <Modal
      title={
        <div className="w-full flex gap-3 items-center">
          <div className="grow text-heading-7 text-typography-title">
            Bài tập
          </div>
        </div>
      }
      isOpen={isOpen}
      closeModal={closeModal}
      size="xl"
    >
      <div className="">
        <div className="px-6 flex flex-col gap-2 w-96">
          <div className="bg-violet-300">
            {hasSubmitted ? (
              <div className="flex justify-between w-full">
                <div className="">Đã nộp bài</div>
                <button onClick={DeleteAssignment}>Hoàn tác nộp bài</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="">Chưa nộp bài</div>
                <button>Nộp bài</button>
              </div>
            )}
          </div>
          <div className="">{getAssignmentById.name}</div>
          <div className="flex gap-2">
            Bắt đầu từ:
            <p>
              {moment(getAssignmentById.start_time).format(
                "dddd, DD-MM-YYYY hh:mm A"
              )}
            </p>
          </div>
          <div className="flex gap-2">
            Đến hạn lúc
            <p>
              {moment(getAssignmentById.end_time).format(
                "dddd, DD-MM-YYYY hh:mm A"
              )}
            </p>
          </div>
        </div>
        <SubmitAssignmentForm selectedAssignmentId={selectedAssignmentId} />
        <div className="">
          {userSubmission.score ? "Chưa có điểm" :" "}
        </div>
      </div>
    </Modal>
  );
};

const SubmitAssignmentForm = ({ selectedAssignmentId }) => {
  const { id } = useParams();
  // const { getTeambyid, getAssignmentById } = useAssigment();
  // useEffect(() => {
  //   if (selectedAssignmentId) {
  //     getTeambyid(id, selectedAssignmentId);
  //   }
  // }, [selectedAssignmentId]);
  const { onSubmitAssigment, onFinishFailed, errorMessage } = useAssigment();
  const handleSubmit = (values) => {
    onSubmitAssigment(id, selectedAssignmentId, values);
  };
  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-4 pt-4"
    >
      <Row>
        <Form.Item>
          <Row className="flex gap-2 w-full">
            <Col>
              <Input
                name="description"
                placeholder="Ghi Chú"
                type="text"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96 "
              />
            </Col>
          </Row>
        </Form.Item>
      </Row>
      <Row>
        <Form.Item>
          <Row className="flex gap-2 w-full">
            <Col>
              <Input
                name="image"
                placeholder="Tải ảnh lên"
                type="file"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96 "
              />
            </Col>
          </Row>
        </Form.Item>
      </Row>
      <button type="submit">Submit Assignment</button>
    </Form>
  );
};

export default Assigment;
