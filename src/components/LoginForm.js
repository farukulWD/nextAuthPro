"use client";

import { Button, Form, Input } from "antd";
import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { api } from "@/services/api";

const LoginForm = () => {
  const { login } = api;
  const handleLogin = async (values) => {
    try {
      const response = await login(values);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center">
      <Form
        style={{ width: "500px" }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleLogin}
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
          <Button
            type="secondary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <Form.Item>Or</Form.Item>
          <Link href="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
