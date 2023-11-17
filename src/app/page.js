"use client";

import LoginForm from "@/components/LoginForm";
import { selectToken, selectUser, setToken } from "@/redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import variable from "@/styles/variables.module.scss";
import LoginPage from "@/app/login/page";

const Home = () => {
  const user = useSelector(selectUser);

  return (
    <main className={` ${variable.bgImage} ${variable.homeStyle}`}>
      {user ? <h1>This is user info</h1> : <LoginPage></LoginPage>}
    </main>
  );
};
export default Home;
