import { selectUser } from "@/redux/slice/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return <div>This is user page</div>;
};

export default ProfilePage;
