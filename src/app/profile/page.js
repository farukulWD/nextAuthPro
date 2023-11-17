import { selectUser } from "@/redux/slice/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = dispatch(selectUser);
  return <div></div>;
};

export default ProfilePage;
