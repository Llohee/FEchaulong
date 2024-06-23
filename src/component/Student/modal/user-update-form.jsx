import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, DatePicker, Button } from "antd";
import { phoneRegex, emailRegex, checkPhoneVN } from "../../../hooks/regex";
import { useGetAllStudent } from "../../../api/students-api";
import TextArea from "antd/es/input/TextArea";
import ConfirmUpdateStudent from "./confirm-update-student";
import ConfirmcloseModal from "./confirm-close-modal";
import moment from "moment";

const UserUpdateForm = ({ closeModal, studentDetail, isReset }) => {
  const { updateStudent } = useGetAllStudent();
  const [form] = Form.useForm();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    form.setFieldsValue({
      fullname: studentDetail.fullname,
      birthday: moment(studentDetail.birthday).isValid()
        ? moment(studentDetail.birthday)
        : null,
      email: studentDetail.email,
      code: studentDetail.code,
      school: studentDetail.school,
      phone: studentDetail.phone,
      address: studentDetail.address,
    });
  }, [form]);
  const handleSubmit = (values) => {
    updateStudent(studentDetail._id, values);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-4 pt-4"
      >
        <Col className="w-full grid grid-cols-2 px-6 gap-4">
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Họ và tên</Row>
            <Form.Item name="fullname">
              <Input
                name="fullname"
                placeholder="Họ và tên"
                type="text"
                disabled
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Ngày tháng năm sinh</Row>
            <Form.Item name="birthday">
              <DatePicker
                name="birthday"
                placeholder="DD-MM-YYYY"
                format="DD-MM-YYYY"
                disabled
                className="w-80"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Email</Row>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Hãy điền email!" },
                {
                  pattern: emailRegex,
                  message: "Sai định dạng Email",
                },
              ]}
            >
              <Input name="email" placeholder="Email" type="email" />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Mã số sinh viên</Row>
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: "Hãy điền mã số sinh viên!",
                },
              ]}
            >
              <Input
                name="code"
                placeholder="Nhập mã số sinh viên"
                type="code"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Trường học</Row>
            <Form.Item
              name="school"
              rules={[
                {
                  required: true,
                  message: "Hãy điền trường học!",
                },
              ]}
            >
              <Input name="school" placeholder="Nhập trường học" type="text" />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="">Số điện thoại</Row>
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
            >
              <Input
                name="phone"
                placeholder="Số điện thoại"
                type="phone"
                onFocus={null}
                onChange={checkPhoneVN}
              />
            </Form.Item>
          </Col>
          <Col className="col-span-2 px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-violet-200/50">
            <Row className="mb-2">Địa chỉ</Row>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Hãy điền địa chỉ!",
                },
              ]}
            >
              <TextArea rows={4} className="w-[1000px]" />
            </Form.Item>
          </Col>
        </Col>
        <Row className="flex justify-between px-6 py-4 shadow-top bg-white sticky bottom-0 border-t-2 border-violet-200">
          <Col>
            <Button onClick={() => setIsOpen(true)}>Hủy</Button>
          </Col>
          <Col>
            <Button
              type="primary"
              // htmlType="submit"
              onClick={() => setOpenConfirmModal(true)}
            >
              Cập nhật
            </Button>
          </Col>
        </Row>
      </Form>
      <ConfirmUpdateStudent
        closeModal={() => setOpenConfirmModal(false)}
        closeForm={closeModal}
        isOpen={openConfirmModal}
        studentDetail={studentDetail}
        handleSubmit={handleSubmit}
      />
      <ConfirmcloseModal
        closeModal={() => setIsOpen(false)}
        closeForm={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default UserUpdateForm;
