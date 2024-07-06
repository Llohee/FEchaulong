import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Upload,
  Button,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import { useAssigment } from "../../../../api/assignment";
import { useParams } from "react-router-dom";
import ConfirmcloseModal from "./confirm-close-modal";
import ConfirmCreateAssignment from "./confirm-create-assignment";

const AssignmentCreateForm = ({ closeModal }) => {
  const [file, setFile] = useState(null);
  const { createAssignment } = useAssigment();
  const { id: teamId } = useParams();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = ({ file }) => {
    setFile(file);
  };

  const handleSubmit = (values) => {
    console.log("Team ID:", teamId);
    console.log("Form Values:", values);
    console.log("File:", file);
    createAssignment(teamId, values, file);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        autoComplete="off"
        className="flex flex-col gap-4 pt-4"
        onFinish={(values) => {
          handleSubmit(values);
          setOpenConfirmModal(true);
        }}
      >
        <Col className="w-full flex flex-col gap-2">
          <Form.Item
            name="name"
            label="Tên bài tập"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên bài tập!",
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
                required: true,
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
            <Upload beforeUpload={() => false} onChange={handleFileChange}>
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Row className="flex justify-between px-6 py-4 shadow-top bg-white sticky bottom-0 ">
          <Col>
            <Button onClick={() => setIsOpen(true)}>Hủy</Button>
          </Col>
          <Col>
            <Button type="primary" onClick={() => form.submit()}>
              Tạo mới
            </Button>
          </Col>
        </Row>
      </Form>
      <ConfirmCreateAssignment
        closeModal={() => setOpenConfirmModal(false)}
        closeForm={closeModal}
        isOpen={openConfirmModal}
        handleSubmit={() => form.submit()}
      />
      <ConfirmcloseModal
        closeModal={() => setIsOpen(false)}
        closeForm={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default AssignmentCreateForm;
