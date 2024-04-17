import React from "react";
import { Row, Col, Form, Input } from "antd";
import { useCreateStu } from "../../../api/create-stu";
import {
  passwordRegex,
  phoneRegex,
  emailRegex,
  checkPhoneVN,
} from "../../../hooks/regex";

const UserCreateForm = ({ closeModal }) => {
  const { createStudent, onFinishFailed, errorMessage } = useCreateStu();

  return (
    <Form
      onFinish={createStudent}
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
        {errorMessage && (
          <div className="text-red-500 text-end">{errorMessage}</div>
        )}
      </Row>
    </Form>
  );
};

export default UserCreateForm;
