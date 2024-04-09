import React, { useEffect } from "react";
import Loginsvg_6 from "../../../images/Loginsvg_6.svg";
import Loginsvg_7 from "../../../images/Loginsvg_7.svg";
import { Row, Col, Form } from "antd";
import { useLoginForm } from "./hook";
import { useNavigate } from "react-router-dom";

const LoginStudentForm = () => {
  const navigate = useNavigate();

  const { handleFormSubmit, onFinishFailed, success } = useLoginForm();
  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [success, navigate]);
  return (
    <Form
      onFinish={handleFormSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-96 flex flex-col items-center justify-center gap-16"
    >
      <Row className="w-full flex flex-col gap-6">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          className="py-6 px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <img src={Loginsvg_6} alt="" className="" />
            </Col>
            <Col>
              <input
                name="email"
                placeholder="TÊN ĐĂNG NHẬP"
                type="text"
                onFocus={null}
                className="h-8 bg-inherit focus:outline-none w-full text-white"
              ></input>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          className="py-6 px-3 rounded border border-white"
        >
          <Row className="flex gap-2">
            <Col>
              <img src={Loginsvg_7} alt="" className="" />
            </Col>
            <Col>
              <input
                name="password"
                placeholder="MẬT KHẨU"
                type="password"
                onFocus={null}
                className="h-8 bg-inherit focus:outline-none w-full text-white"
              ></input>
            </Col>
          </Row>
        </Form.Item>
      </Row>
      <Row className="w-full flex flex-col gap-2">
        <button
          type="primary"
          htmlType="submit"
          className="py-2 rounded border-none bg-white text-[#2148C0] text-xl"
        >
          Đăng nhập
        </button>
      </Row>
    </Form>
  );
};

export default LoginStudentForm;
