import React from "react";
import Loginsvg_6 from "../../../images/Loginsvg_6.svg";
import Loginsvg_7 from "../../../images/Loginsvg_7.svg";
import { Row, Col, Form, Input } from "antd";
import { useLoginForm } from "../../../api/login-api";
import { emailRegex, passwordRegex } from "../../../hooks/regex";

const LoginStudentForm = () => {
  const { handleFormSubmit, onFinishFailed, errorMessage } = useLoginForm();
  return (
    <Form
      onFinish={handleFormSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-96 flex flex-col gap-16"
    >
      <Row className="w-full flex flex-col gap-6">
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
          className="py-6 px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <img src={Loginsvg_6} alt="" className="" />
            </Col>
            <Col>
              <Input
                name="email"
                placeholder="Email"
                type="text"
                onFocus={null}
                className="text-lg h-8 bg-inherit hover:bg-inherit focus:bg-inherit focus:border-none w-80  placeholder:text-white border-none"
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
                "Ít nhất 9 kí tự bao gồm chữ hoa, chữ thường, số, kí tự đặc biệt",
            },
          ]}
          className="py-6 px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <img src={Loginsvg_7} alt="" className="" />
            </Col>
            <Col>
              <Input
                name="password"
                placeholder="Mật khẩu"
                type="password"
                autoComplete="null"
                autoFocus={null}
                onFocus={null}
                className="text-lg h-8 !bg-inherit hover:bg-inherit focus:bg-inherit focus:border-none w-80  placeholder:text-white border-none"
              />
            </Col>
          </Row>
        </Form.Item>
      </Row>
      <Row className="w-full flex flex-col gap-2">
        <button
          type="primary"
          htmlType="submit"
          className="py-4 rounded border-none bg-white text-[#2148C0] text-xl"
        >
          Đăng nhập
        </button>
        {errorMessage && (
          <div className="text-red-500 text-end">{errorMessage}</div>
        )}
      </Row>
    </Form>
  );
};

export default LoginStudentForm;
