import React, { useEffect } from "react";
import { Row, Col, Form, Input, DatePicker, Space, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useGetAllTeams } from "../../../api/teams-api";

const TeamCreateForm = ({ closeModal }) => {
  const { CreateAssignment } = useGetAllTeams();
  const handleSubmit = async (values) => {
    CreateAssignment(values, closeModal);
  };
  return (
    <Form
      onFinish={handleSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="pt-4"
    >
      <Col className="w-full px-6 gap-x-6">
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Hãy điền họ và tên!",
            },
          ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2 w-full">
            <Col>
              <Row className="mb-2">Tên lớp học</Row>
              <Input
                name="name"
                placeholder="Họ và tên"
                type="text"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-80 "
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Hãy điền mô tả!",
            },
          ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2 w-full">
            <Col>
              <Row className="mb-2">Mô tả lớp học</Row>
              <TextArea
                name="description"
                placeholder="Mô tả"
                type="text"
                rows={4}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-80 "
              />
            </Col>
          </Row>
        </Form.Item>
      </Col>
      <Row className="flex justify-between px-6 py-4 shadow-top bg-slate-200 sticky bottom-0">
        <Col>
          <Button onClick={closeModal}>Hủy</Button>
        </Col>
        <Col>
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TeamCreateForm;
