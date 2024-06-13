import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          {userSubmitted ? (
            <Button onClick={handledeleteSubmit}>Hoàn tác nộp bài</Button>
          ) : (
            <Button type="primary" htmlType="submit" loading={submitting}>
              Nộp bài
            </Button>
          )}
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
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <TextArea rows={4} disabled={userSubmitted} />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            valuePropName="file"
            rules={[{ required: true, message: "Please upload an image" }]}
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
