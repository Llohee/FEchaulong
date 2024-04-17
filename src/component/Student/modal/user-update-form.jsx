import React from "react";
import { Row, Col, Form, Input } from "antd";
import { phoneRegex, emailRegex, checkPhoneVN } from "../../../hooks/regex";
import { useGetAllStudent } from "../../../api/students-api";

const UserUpdateForm = ({ closeModal, studentDetail, isReset }) => {
  const { updateStudent } = useGetAllStudent();
  const handleSubmit = (values) => {
    updateStudent(studentDetail._id, values);
    closeModal();
    isReset();
  };
  return (
    <Form
      onFinish={handleSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-4 pt-4"
      initialValues={studentDetail}
    >
      <Row className="w-full flex flex-col gap-2">
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Hãy điền họ và tên!",
            },
          ]}
          className="px-3 rounded border border-white"
        >
          <Row className="flex gap-2 w-full">
            <Col>
              <Input
                name="fullname"
                placeholder="Họ và tên"
                type="text"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96 "
                defaultValue={studentDetail.fullname}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy điền email!",
            },
            {
              pattern: emailRegex,
              message: "Sai định dạng Email",
            },
          ]}
          className="px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-96 "
                defaultValue={studentDetail.email}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Hãy điền số điện thoại!",
            },
            {
              pattern: phoneRegex,
              message: "Sai định dạng số điện thoại",
            },
          ]}
          className="px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <Input
                name="phone"
                placeholder="Số điện thoại"
                type="phone"
                onFocus={null}
                onChange={checkPhoneVN}
                className="bg-slate-100 rounded-lg text-sm w-96 bg-inherit focus:outline-none  px-4 py-2"
                defaultValue={studentDetail.phone}
              />
            </Col>
          </Row>
        </Form.Item>
      </Row>
      <Row className="flex justify-between px-6 py-4 shadow-top shadow-2xl bg-white sticky bottom-0 ">
        <Col>
          <button onClick={closeModal}>Hủy</button>
        </Col>
        <Col>
          <button type="primary" htmlType="submit">
            Cập nhật
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default UserUpdateForm;
