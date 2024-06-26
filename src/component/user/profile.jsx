import React, { useEffect, useState } from "react";
import { useLoginForm } from "../../api/login-api";
import Avatar from "../../ui/avatar/avatar";
import { useGetAllStudent } from "../../api/students-api";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import { checkPhoneVN, emailRegex, phoneRegex } from "../../hooks/regex";
import moment from "moment";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Profile = () => {
  const { userLogin } = useLoginForm();
  const { updateStudent } = useGetAllStudent();
  const [submitting, setSubmitting] = useState(false);
  const [editable, setEditable] = useState({
    email: false,
    phone: false,
    code: false,
    school: false,
    address: false,
  });

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    updateStudent(userLogin._id, values, setSubmitting);
    setEditable({
      email: false,
      code: false,
      school: false,
      address: false,
      phone: false,
    });
  };

  const initialValues = {
    fullname: userLogin.fullname,
    birthday: moment(userLogin.birthday).isValid()
      ? moment(userLogin.birthday)
      : null,
    email: userLogin.email,
    phone: userLogin.phone,
    school: userLogin.school,
    code: userLogin.code,
    address: userLogin.address,
    updated_by: userLogin.updated_by?.fullname,
    created_date: moment(userLogin.created_date).isValid()
      ? moment(userLogin.created_date)
      : null,
    updated_date: moment(userLogin.updated_date).isValid()
      ? moment(userLogin.updated_date)
      : null,
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [userLogin, form]);
  return (
    <div className="sub_container w-full relative overflow-hidden">
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={initialValues}
        className="flex flex-col gap-4 container mx-auto max-w-[1000px] justify-center my-10"
      >
        <Row className="text-2xl text-white">Thông tin</Row>
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
              {/* <Col>
                {!editable.email ? (
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => setEditable({ ...editable, email: true })}
                  />
                ) : (
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => setEditable({ ...editable, email: false })}
                  />
                )}
              </Col> */}
            </Row>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Hãy điền email!" },
                {
                  pattern: emailRegex,
                  message: "Sai định dạng Email",
                },
              ]}
              className="w-full"
            >
              <Input
                name="email"
                disabled={!editable.email}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Mã số sinh viên</Row>
              {!editable.code ? (
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => setEditable({ ...editable, code: true })}
                />
              ) : (
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setEditable({ ...editable, code: false })}
                />
              )}
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
                  disabled={!editable.code}
                  type="text"
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Trường học</Row>
              {!editable.school ? (
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => setEditable({ ...editable, school: true })}
                />
              ) : (
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setEditable({ ...editable, school: false })}
                />
              )}
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
                  disabled={!editable.school}
                  type="text"
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Số điện thoại</Row>
              {!editable.phone ? (
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => setEditable({ ...editable, phone: true })}
                />
              ) : (
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setEditable({ ...editable, phone: false })}
                />
              )}
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
                  disabled={!editable.phone}
                  onFocus={null}
                  onChange={checkPhoneVN}
                />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="flex justify-between items-center">
              <Row className="min-h-8">Địa chỉ</Row>
              {!editable.address ? (
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => setEditable({ ...editable, address: true })}
                />
              ) : (
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => setEditable({ ...editable, address: false })}
                />
              )}
            </Row>
            <Row>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Hãy điền địa chỉ!" }]}
                className="w-full"
              >
                <TextArea rows={1} className="" disabled={!editable.address} />
              </Form.Item>
            </Row>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="min-h-8">Ngày tạo</Row>
            <Form.Item name="created_date" className="w-full">
              <DatePicker
                name="created_date"
                placeholder="DD-MM-YYYY"
                format="DD-MM-YYYY"
                disabled
                className="w-full"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="min-h-8">Người cập nhật</Row>
            <Form.Item name="updated_by" className="w-full">
              <Input
                name="updated_by"
                disabled
                placeholder="Người cập nhật"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="px-3 pt-2 flex flex-col gap-2 rounded-lg border border-white bg-slate-200/50">
            <Row className="min-h-8">Ngày cập nhật</Row>
            <Form.Item name="updated_date" className="w-full">
              <DatePicker
                name="updated_date"
                placeholder="DD-MM-YYYY"
                format="DD-MM-YYYY"
                disabled
                className="w-full"
              />
            </Form.Item>
          </Col>
        </Col>
        <Row className="flex justify-end w-full">
          <Button
            htmlType="submit"
            loading={submitting}
            className="bg-slate-300 hover:bg-slate-300 text-black w-fit"
          >
            Cập nhật thông tin
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
