import React from "react";
import AuthForm from "../components/AuthForm";
import helix from "../assets/Helix.gif";

const AuthPage = () => {
  return (
    <div className="flex w-full h-screen ">
      <div className="hidden  w-[50%] lg:flex items-center bg-yellow justify-center">
        <img src={helix} alt="" />
      </div>
      <div className="w-full lg:py-2 lg:w-[50%] items-center flex justify-center ">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
