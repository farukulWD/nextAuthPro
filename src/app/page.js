"use client";

import { selectToken, setToken } from "@/redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(setToken("kafjsdhfjshfkljsahfklash"));

  const token = useSelector(selectToken);
  return (
    <main className="">
      <div>This is Home page {token}</div>
    </main>
  );
};
export default Home;
