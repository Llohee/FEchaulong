import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, DatePicker, Space, Upload, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { useAssigment } from "../../../../api/assignment";
import { useParams } from "react-router-dom";

const AssignmentCreateForm = ({ closeModal }) => {
  const [file, setFile] = useState(null);
  const { createAssignment } = useAssigment();
  const Teamid  = useParams();
  const handleFileChange = ({ file }) => {
    setFile(file);
  };
  const handleSubmit = (values) => {
    createAssignment(Teamid.id, values, file);
  };
  return (
    <Form
      onFinish={handleSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-4 pt-4"
    >
      <Col className="w-full flex flex-col gap-2">
        <Form.Item
          name="name"
          label="Tên bài tập"
          rules={[
            {
              message: "Hãy tên bài tập!",
            },
          ]}
          className="px-3"
        >
          <Row className="flex gap-2 w-full">
            <Col>
              <Input
                name="name"
                placeholder="Nhập tên bài tập"
                type="text"
                onFocus={null}
                className="bg-white px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96 "
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả bài tập"
          rules={[
            {
              message: "Nhập mô tả",
            },
          ]}
          className="px-3"
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name="start_time" label="Ngày bắt đầu" className="px-3">
          <DatePicker
            showTime
            className="w-full z-[1000]"
            placeholder="Chọn ngày giờ bắt đầu"
          />
        </Form.Item>
        <Form.Item name="end_time" label="Ngày kết thúc" className="px-3">
          <DatePicker
            showTime
            className="w-full"
            placeholder="Chọn ngày giờ kết thúc"
          />
        </Form.Item>
        <Form.Item
          name="image"
          label="Tải ảnh"
          valuePropName="file"
          className="px-3"
        >
          <Upload
            beforeUpload={() => false}
            onChange={handleFileChange}
          >
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
        </Form.Item>
      </Col>
      <Row className="flex justify-between px-6 py-4 shadow-top bg-white sticky bottom-0 ">
        <Col>
          <button onClick={closeModal}>Hủy</button>
        </Col>
        <Col>
          <button type="primary" htmlType="submit">
            Tạo mới
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default AssignmentCreateForm;
