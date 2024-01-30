import React, { useContext } from "react";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../App";

const AuthForm = () => {
  const { setAccessToken } = useContext(UserContext);
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("user", data.user.accessToken);
      setAccessToken(data.user.accessToken);
      navigate("/dashboard");
    });
  };

  return (
    <>
      <div className="w-full max-w-md p-4 my-0 lg:my-2">
        <h1 className="py-6 text-3xl font-bold text-dark-grey">Welcome!</h1>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="my-1 text-sm text-light-grey">
            Email Address
          </label>

          <input
            type="email"
            className="w-full h-12 px-4 py-1 mb-5 border rounded border-light-grey placeholder-extralight-grey outline-input-outline-yellow"
            placeholder="umartinez@gmail.com"
          />

          <label htmlFor="" className="my-1 text-sm text-light-grey">
            Password
          </label>
          <input
            type="password"
            className="w-full h-12 px-4 py-1 border rounded border-light-grey placeholder-extralight-grey outline-input-outline-yellow "
            placeholder="Password"
          />

          <label htmlFor="" className="pb-5 my-1 text-sm text-light-grey ">
            Password must be at least 8 characters long.
          </label>

          <label htmlFor="" className="my-1 text-sm text-light-grey">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full h-12 px-4 py-1 mb-5 border rounded border-light-grey outline-input-outline-yellow placeholder-extralight-grey "
            placeholder="Confirm Password"
          />

          <p className="mt-8 mb-2 text-sm text-center text-light-grey">
            By signing up you agree with{" "}
            <span className="cursor-pointer text-blue">
              terms and conditions
            </span>
          </p>

          <button type="submit" className="py-3 my-4 bg-yellow">
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-between my-4">
          <div className="w-full border-b border-light-grey"></div>
          <p className="px-3 text-center w-fit text-nowrap text-light-grey ">
            Or Sign in with
          </p>
          <div className="w-full border-b border-light-grey"></div>
        </div>
        <div className="flex my-4 justify-evenly">
          <img
            onClick={handleGoogleSignin}
            src={google}
            alt=""
            className="h-8 cursor-pointer"
          />
          <img src={facebook} alt="" className="h-8" />
          <img src={apple} alt="" className="h-8" />
        </div>
        <div className="flex justify-center my-4">
          Already have an account?{" "}
          <span className="ml-2 cursor-pointer text-blue">Log in</span>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
