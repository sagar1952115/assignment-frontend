import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const HomepageHeader = () => {
  return (
    <div>
      <div className="h-[80px] flex items-center justify-between px-16 bg-dark-yellow shadow shadow-white z-50 text-white border-b-2">
        <div className="flex items-center">
          <div className="mr-5 rounded-full bg-dark-grey">
            <img src={logo} alt="" className="w-[43px] h-[43px]" />
          </div>
          <ul className="z-30 flex">
            <li className="px-5">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-5">
              <Link to="/">ABOUT</Link>
            </li>
            <li className="px-5">
              <Link to="/">MEAL PLANS</Link>
            </li>
            <li className="px-5">
              <Link to="/">WORKOUT ROUTINE</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <Link to="/login" className="px-5 py-2">
            LOG IN
          </Link>

          <div className="px-5 py-2">SIGN UP</div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
