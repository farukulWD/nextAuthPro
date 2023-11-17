"use client";

import LoginForm from "@/components/LoginForm";
import { selectToken, selectUser, setToken } from "@/redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import variable from "@/styles/variables.module.scss";

const Home = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <main>
      <h1>This is home page</h1>
    </main>
  );
};
export default Home;
