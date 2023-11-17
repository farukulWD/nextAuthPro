"use client";

import React from "react";
import { Menu, Dropdown } from "antd";
import Link from "next/link";

const Navbar = () => {
  const profileMenu = (
    <Menu>
      <Menu.Item key="updateProfile">
        <Link href="/update-profile">Update Profile</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="register">
        <Link href="/register">Register</Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Dropdown overlay={profileMenu}>
          <Link href="/profile">Profile</Link>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
