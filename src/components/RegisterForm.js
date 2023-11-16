"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { api } from "@/services/api";

import Link from "next/link";

const RegistrationForm = () => {
  const { register } = api;
  const handleRegistration = async (values) => {
    try {
      const response = await register(values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Registration</h2>
      <Form
        name="Register Form"
        className="registerForm"
        initialValues={{
          remember: true,
        }}
        onFinish={handleRegistration}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            className="login-form-button"
          >
            register now!
          </Button>
        </Form.Item>

        <Form.Item>
          <Link href={"/login"}>Login here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
