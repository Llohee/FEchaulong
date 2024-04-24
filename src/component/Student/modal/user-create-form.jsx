import React, { useEffect } from "react";
import { Row, Col, Form, Input, DatePicker, Space } from "antd";
import { useCreateStu } from "../../../api/create-stu";
import {
  passwordRegex,
  phoneRegex,
  emailRegex,
  checkPhoneVN,
} from "../../../hooks/regex";
const UserCreateForm = ({ closeModal }) => {
  const { createStudent, onFinishFailed, errorMessage } = useCreateStu();
  const handleSubmit = (values) => {
    createStudent(values);
    closeModal();
  };
  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-4 pt-4"
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
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="birthday"
          rules={[
            {
              required: true,
              message: "Hãy điền ngày tháng năm sinh!",
            },
          ]}
          className="px-3 rounded border border-white"
        >
          {/* <Space direction="vertical" className="w-full"> */}
          <DatePicker
            placeholder="DD-MM-YYYY"
            format="DD-MM-YYYY"
            className="w-full bg-slate-100 hover:bg-inherit"
          />
          {/* </Space> */}
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
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy điền mật khẩu!",
            },
            {
              pattern: passwordRegex,
              message:
                "Ít nhất 9 kí tự bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt",
            },
          ]}
          className="px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <Input
                name="password"
                placeholder="Mật khẩu"
                type="password"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-96 bg-inherit focus:outline-none  px-4 py-2"
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Hãy nhập lại mật khẩu!",
            },
            {
              pattern: passwordRegex,
              message:
                "Ít nhất 9 kí tự bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không khớp"));
              },
            }),
          ]}
          className="px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <Input
                name="password"
                placeholder="Xác nhận mật khẩu"
                type="password"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-96 bg-inherit focus:outline-none  px-4 py-2"
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
              />
            </Col>
          </Row>
        </Form.Item>

        {errorMessage && (
          <div className="text-red-500 text-end px-4">{errorMessage}</div>
        )}
      </Row>
      <Row className="flex justify-between px-6 py-4 shadow-top shadow-2xl bg-white sticky bottom-0 ">
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

export default UserCreateForm;
