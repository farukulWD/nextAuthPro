"use client";

import React from "react";
import { Menu } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <Menu className="menu" mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="register">
        <Link href="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
