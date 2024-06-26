import React, { useEffect } from "react";
import { Row, Col, Form, Input, DatePicker, Space, Button } from "antd";
import { useCreateStu } from "../../../api/create-stu";
import {
  passwordRegex,
  phoneRegex,
  emailRegex,
  checkPhoneVN,
} from "../../../hooks/regex";
import TextArea from "antd/es/input/TextArea";
const UserCreateForm = ({ closeModal }) => {
  const { createStudent, onFinishFailed, errorMessage } = useCreateStu();
  const handleSubmit = async (values) => {
    createStudent(values, closeModal);
  };
  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col gap-4 pt-4"
    >
      <Row className="w-full grid grid-cols-2 px-6 gap-x-6">
        <Form.Item
          name="fullname"
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
              <Row className="mb-2">Họ và tên</Row>
              <Input
                name="fullname"
                placeholder="Họ và tên"
                type="text"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-80 "
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="birthday"
          // rules={[
          //   {
          //     required: true,
          //     message: "Hãy điền ngày tháng năm sinh!",
          //   },
          // ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Ngày tháng năm sinh</Row>
              <DatePicker
                name="birthday"
                placeholder="DD-MM-YYYY"
                format="DD-MM-YYYY"
                className=" bg-slate-100 hover:bg-inherit w-80"
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
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Email</Row>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                onFocus={null}
                className="bg-slate-100 px-4 py-2 rounded-lg text-sm bg-inherit focus:outline-none w-80 "
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
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Mật khẩu</Row>
              <Input
                name="password"
                placeholder="Mật khẩu"
                type="password"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-80 bg-inherit focus:outline-none  px-4 py-2"
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
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Nhập lại mật khẩu</Row>
              <Input
                name="password"
                placeholder="Xác nhận mật khẩu"
                type="password"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-80 bg-inherit focus:outline-none  px-4 py-2"
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              message: "Hãy điền mã số sinh viên!",
            },
          ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Mã số sinh viên</Row>
              <Input
                name="code"
                placeholder="Mã số sinh viên"
                type="number"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-80 bg-inherit focus:outline-none  px-4 py-2"
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="school"
          rules={[
            {
              required: true,
              message: "Hãy điền trường học!",
            },
          ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Trường học</Row>
              <Input
                name="school"
                placeholder="Trường học"
                type="school"
                onFocus={null}
                className="bg-slate-100 rounded-lg text-sm w-80 bg-inherit focus:outline-none  px-4 py-2"
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
          className="p-3 rounded-lg border border-white bg-slate-200/50"
        >
          <Row className="flex gap-2">
            <Col>
              <Row className="mb-2">Số điện thoại</Row>
              <Input
                name="phone"
                placeholder="Số điện thoại"
                type="phone"
                onFocus={null}
                onChange={checkPhoneVN}
                className="bg-slate-100 rounded-lg text-sm w-80 bg-inherit focus:outline-none  px-4 py-2"
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Hãy điền địa chỉ!",
            },
          ]}
          className="p-3 rounded-lg border border-white bg-slate-200/50 col-span-2"
        >
          <Row className="flex gap-2">
            <Row className="mb-2">Địa chỉ</Row>
            <Col>
              <TextArea rows={4} className="w-[1000px]" />
            </Col>
          </Row>
        </Form.Item>
      </Row>
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

export default UserCreateForm;
