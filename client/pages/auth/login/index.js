import Login from "@/components/authComponents/login";
import React from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      const token = window.localStorage.getItem("token");
      if (typeof token === "string") {
        dispatch(getToken(token));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
