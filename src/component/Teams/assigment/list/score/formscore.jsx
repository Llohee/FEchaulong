import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { useAssigment } from "../../../../../api/assignment";
import { useParams } from "react-router-dom";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

const Formscore = ({ closeModal, studentchoose, isReset }) => {
  const [form] = Form.useForm();
  const { user, submission } = studentchoose;
  const { id, assignmentId } = useParams();
  const { updateSubmission } = useAssigment();
  const [editableScore, setEditableScore] = useState(false);
  const [editableComment, setEditableComment] = useState(false);

  useEffect(() => {
    if (submission) {
      form.setFieldsValue({
        description: submission.description,
        image: submission.image,
        submitted_time: submission.submitted_time,
        score: submission.score,
        comment: submission.comment,
      });
    }
  }, [submission, form]);

  const handleSubmit = async (values) => {
    if (submission && submission.id) {
      await updateSubmission(id, assignmentId, submission.id, values);
      closeModal();
    }
  };
  const getBase64ImageSrc = (base64Data) => {
    return `data:image/png;base64,${base64Data}`;
  };
  const validateScore = async (rule, value) => {
    const score = parseInt(value);
    if (isNaN(score)) {
      throw new Error("Điểm phải là một số");
    }
    if (score < 1 || score > 10) {
      throw new Error("Điểm phải nằm trong khoảng từ 1 đến 10");
    }
  };
  return (
    <>
      <Form form={form} onFinish={handleSubmit}>
        <Row className="flex flex-col gap-6 px-4 py-6">
          <Row className="">
            Học sinh: {!user ? "Đang tải tên học sinh..." : user.fullname}
          </Row>
          <Row className="">
            Email: {!user ? "Đang tải email học sinh..." : user.email}
          </Row>
          <Form.Item name="description" label="Ghi chú bài tập">
            <TextArea rows={4} disabled />
          </Form.Item>
          {submission ? (
            <>
              <img
                src={getBase64ImageSrc(submission.image)}
                alt="Ảnh"
                style={{ maxWidth: "50%" }}
              />
              {/* <Form.Item name="score">
                <Row className="mb-2">Điểm</Row>
                <Row>
                  <Col className="flex gap-2 w-full">
                    <Form.Item
                      name="score"
                      rules={[
                        {
                          validator: validateScore,
                        },
                      ]}
                    >
                      <Input
                        name="score"
                        placeholder="Điền điểm số"
                        maxLength={2}
                        minLength={0}
                        disabled={!editableScore}
                        type="number"
                        className="bg-white px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96"
                      />
                    </Form.Item>
                    {!editableScore ? (
                      <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => setEditableScore(true)}
                      />
                    ) : (
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={() => setEditableScore(false)}
                      />
                    )}
                  </Col>
                </Row>
              </Form.Item> */}
              <Form.Item name="score">
                <Row className="mb-2">Điểm</Row>
                <Row className="">
                  <Col className="flex gap-2 w-full">
                    <Form.Item
                      name="score"
                      noStyle
                      rules={[
                        {
                          validator: validateScore,
                        },
                      ]}
                    >
                      <Input
                        name="score"
                        placeholder="Điền điểm số"
                        maxLength={2}
                        minLength={0}
                        disabled={!editableScore}
                        type="number"
                        className="bg-white px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96"
                      />
                    </Form.Item>
                    {!editableScore ? (
                      <Button
                        type="number"
                        icon={<EditOutlined />}
                        onClick={() => setEditableScore(true)}
                      />
                    ) : (
                      <Button
                        type="number"
                        icon={<CloseOutlined />}
                        onClick={() => setEditableScore(false)}
                      />
                    )}
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item name="comment">
                <Row className="mb-2">Nhận xét</Row>
                <Row className="">
                  <Col className="flex gap-2 w-full">
                    <Form.Item name="comment" noStyle>
                      <Input
                        name="comment"
                        placeholder="Điền nhận xét"
                        type="text"
                        disabled={!editableComment}
                        className="bg-white px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96"
                      />
                    </Form.Item>
                    {!editableComment ? (
                      <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => setEditableComment(true)}
                      />
                    ) : (
                      <Button
                        type="text"
                        icon={<CloseOutlined />}
                        onClick={() => setEditableComment(false)}
                      />
                    )}
                  </Col>
                </Row>
              </Form.Item>
            </>
          ) : (
            "Đang tải..."
          )}
        </Row>
        <Row className="flex justify-between px-6 py-4 shadow-top bg-white sticky bottom-0">
          <Col>
            <button onClick={closeModal}>Hủy</button>
          </Col>
          <Col>
            <button type="primary" htmlType="submit">
              Chấm điểm
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Formscore;
