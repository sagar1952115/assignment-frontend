import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import ellipse1 from "../assets/ellipse1.png";
import ellipse2 from "../assets/ellipse2.png";
import ellipse3 from "../assets/ellipse3.jpeg";
import ellipse4 from "../assets/ellipse4.png";
import ellipse5 from "../assets/ellipse5.png";

const LandingComponent = () => {
  return (
    <div className="px-2 h-[calc(100vh-80px)] py-3">
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="w-[570px] h-[570px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/20 z-10">
            <div className="w-[500px] h-[500px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/40 z-10">
              <div className="w-[430px] h-[430px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/60 z-10">
                <div className="w-[360px] h-[360px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/80 z-10">
                  <div className="w-[290px] h-[290px] flex justify-center items-center rounded-full border-8 border-[#ffe15d] z-10">
                    <img src={logo} alt="" className="z-10 h-64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={ellipse5}
            alt=""
            className="absolute z-10 h-40 -top-6 left-40"
          />
          <img
            src={ellipse4}
            alt=""
            className="absolute z-10 h-32 top-16 right-8"
          />
          <img
            src={ellipse3}
            alt=""
            className="absolute z-10 w-32 h-32 rounded-full top-48 -left-6"
          />
          <img
            src={ellipse2}
            alt=""
            className="absolute z-10 h-36 -bottom-10 left-20"
          />
          <img
            src={ellipse1}
            alt=""
            className="absolute z-10 h-44 bottom-8 right-12"
          />
        </div>

        <div className="w-[55%]">
          <div className="py-3">
            <h1 className="text-dark-grey font-oswald text-6xl py-3 font-[1000] tracking-[0.5rem]">
              CHANGE YOUR HABITS
            </h1>
            <span className="text-dark-grey font-oswald text-6xl py-3 font-[1000] tracking-[0.5rem]">
              CHANGE YOUR LIFE
            </span>
            <span className="px-2 text-3xl text-white font-oswald">
              WITH AI
            </span>
          </div>
          <p className="w-3/4 py-3 text-lg">
            Our AI-powered algorithm takes into consideration your goals,
            dietary restrictions, food preferences, and fitness level to create
            a comprehensive plan that optimizes your health and fitness journey.
          </p>
          <ul className="flex gap-10 py-3">
            <li>EASY ONBOARDING</li>
            <li>EASY ONBOARDING</li>
            <li>EASY ONBOARDING</li>
          </ul>
          <Link
            to="/tryout"
            className="px-5 py-2 my-5 text-sm text-white bg-dark-grey"
          >
            TRY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
