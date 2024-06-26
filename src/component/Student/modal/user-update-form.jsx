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
  const initialValues = {
    fullname: studentDetail.fullname,
    birthday: moment(studentDetail.birthday).isValid()
      ? moment(studentDetail.birthday)
      : null,
    email: studentDetail.email,
    phone: studentDetail.phone,
    school: studentDetail.school,
    code: studentDetail.code,
    address: studentDetail.address,
    updated_by: studentDetail.updated_by?.fullname,
    created_date: moment(studentDetail.created_date).isValid()
      ? moment(studentDetail.created_date)
      : null,
    updated_date: moment(studentDetail.updated_date).isValid()
      ? moment(studentDetail.updated_date)
      : null,
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [studentDetail, form]);

  const handleSubmit = async (values) => {
    await updateStudent(studentDetail._id, values);
    form.resetFields();
  };

  const handleConfirmSubmit = () => {
    form.submit();
    setOpenConfirmModal(false);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
        className="flex flex-col gap-4 pt-4"
      >
        <Col className="w-full grid grid-cols-2 px-6 gap-4">
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="min-h-8">Họ và tên</Row>
            <Form.Item name="fullname">
              <Input
                name="fullname"
                disabled
                placeholder="Họ và tên"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="min-h-8">Ngày tháng năm sinh</Row>
            <Form.Item name="birthday" className="w-full">
              <DatePicker
                name="birthday"
                placeholder="DD-MM-YYYY"
                format="DD-MM-YYYY"
                disabled
                className="w-full"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex items-center justify-between">
              <Col className="min-h-8">Email</Col>
            </Row>
            <Form.Item name="email" className="w-full">
              <Input name="email" disabled placeholder="Email" type="email" />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Mã số sinh viên</Row>
            </Row>
            <Row>
              <Form.Item
                name="code"
                rules={[
                  { required: true, message: "Hãy điền mã số sinh viên!" },
                ]}
                className="w-full"
              >
                <Input
                  name="code"
                  placeholder="Nhập mã số sinh viên"
                  type="text"
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Trường học</Row>
            </Row>
            <Row>
              <Form.Item
                name="school"
                rules={[{ required: true, message: "Hãy điền trường học!" }]}
                className="w-full"
              >
                <Input
                  name="school"
                  placeholder="Nhập trường học"
                  type="text"
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Số điện thoại</Row>
            </Row>
            <Row>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Hãy điền số điện thoại!" },
                  {
                    pattern: phoneRegex,
                    message: "Sai định dạng số điện thoại",
                  },
                ]}
                className="w-full"
              >
                <Input
                  name="phone"
                  placeholder="Số điện thoại"
                  type="text"
                  onFocus={null}
                  onChange={checkPhoneVN}
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="col-span-2 px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Địa chỉ</Row>
            </Row>
            <Row>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Hãy điền địa chỉ!" }]}
                className="w-full"
              >
                <TextArea rows={1} className="" />
              </Form.Item>
            </Row>
          </Col>
        </Col>
        <Row className="flex justify-between px-6 py-4 shadow-top bg-white sticky bottom-0 border-t-2 border-slate-200">
          <Col>
            <Button onClick={() => setIsOpen(true)}>Hủy</Button>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setOpenConfirmModal(true)}>
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
        handleSubmit={handleConfirmSubmit}
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
