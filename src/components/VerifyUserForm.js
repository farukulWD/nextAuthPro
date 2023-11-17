"use client";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { api } from "@/services/api";
import variable from "@/styles/variables.module.scss";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const VerifyUserForm = () => {
  const [getEmail, setGetEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    const getLocalStoreEmail = localStorage?.getItem("email") | "";
    setGetEmail(getLocalStoreEmail);
  }, []);
  const { verifyEmail } = api;
  const handleVerify = async (values) => {
    try {
      const response = await verifyEmail(values);
      console.log(response.data);
      if (response.data.success) {
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Congratulation!!",
          text: "Now login!",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.removeItem("email");
        router.push("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  return (
    <div className={variable.FormStyle}>
      <div className={variable.titleSection}>
        <h2 className={variable.title}>Please Verify</h2>
        <p className={variable.subTitle}>Your Email</p>
        <p className={variable.emailClass}>We Have send an email {getEmail}</p>
      </div>
      <Form
        style={{ width: "500px" }}
        name="verify email"
        className="verify-form"
        initialValues={{
          email: getEmail,
        }}
        onFinish={handleVerify}
      >
        <Form.Item
          hidden
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
            defaultValue={getEmail ? getEmail : "example@gmail.com"}
            readOnly
            prefix={<UserOutlined className="site-form-item-icon" />}
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
