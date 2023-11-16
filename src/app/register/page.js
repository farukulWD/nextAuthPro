"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

const RegistrationForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        height: "90vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Registration</h2>
      <Form onSubmit={handleRegister}>
        <input type="text" name="name" id="" />
        <input type="submit" value="submit" />
      </Form>
    </div>
  );
};

export default RegistrationForm;
