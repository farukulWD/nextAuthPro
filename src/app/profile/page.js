"use client";
import { selectUser } from "@/redux/slice/userSlice";
import { Card } from "antd";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      <Card
        title="Card title"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <div>
          <Image src="" alt="" />
          <div></div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
