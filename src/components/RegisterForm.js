"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { api } from "@/services/api";
import variable from "@/styles/variables.module.scss";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const router = useRouter();
  const { register } = api;

  const handleRegistration = async (values) => {
    try {
      const response = await register(values);
      console.log(response.data);
      if (response.data.isOtpSend) {
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Please check your Email",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("email", values.email);
        router.push("/verifyOtp");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={variable.LoginFormStyle}>
      <div className={variable.titleSection}>
        <h2 className={variable.title}>Welcome Back</h2>
        <p className={variable.subTitle}>Please Register</p>
      </div>
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
          <Button
            type="secondary"
            htmlType="submit"
            className="login-form-button"
          >
            register now!
          </Button>
        </Form.Item>

        <Form.Item>
          <p className={variable.redirectText}>
            {" "}
            All Ready Have an account <Link href={"/login"}>Login here</Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
