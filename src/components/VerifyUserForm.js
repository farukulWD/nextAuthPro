"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { api } from "@/services/api";

const VerifyUserForm = () => {
  const { verifyEmail } = api;
  const handleVerify = async (values) => {
    console.log(values);
    try {
      const response = await verifyEmail(values);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center">
      <Form
        style={{ width: "500px" }}
        name="verify email"
        className="verify-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleVerify}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="otp"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="number"
            placeholder="type our otp"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            className="login-form-button"
          >
            Verify Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyUserForm;
