import React from "react";
import TryoutForm from "../components/TryoutForm";
import darkLogo from "../assets/Logo-dark.png";

const TryoutPage = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row text-[#2C2C2C]">
      <div className="bg-[#F3DE53] lg:h-screen w-full lg:w-1/2 px-5 lg:px-20 pt-5 flex justify-center items-center flex-col gap-24">
        <div className=" max-w-[638px]">
          <h1 className="py-4 my-6 text-4xl font-semibold ">
            Subscribe to our Enterprise Plan
          </h1>
          <p className="py-2">
            Our Enterprise Plan is designed for businesses and organizations
            that want to provide their employees or members with a personalized
            plans to achieve their health and wellness goals. With our
            Enterprise Plan, you'll get access to a suite of advanced features
            and tools.
          </p>
          <p className="py-2">
            To request more information about our Enterprise Plan , please fill
            out the form below. One of our representatives will be in touch with
            you shortly.
          </p>
          <ul className="px-5 list-disc">
            <li className="py-2 font-bold"></li>
            <li className="py-2 font-bold">
              Priority access to our team of experts for technical assistance
              and troubleshooting
            </li>
            <li className="py-2 font-bold">
              Access advanced analytics and reporting to track your
              organization's fitness and wellness goals
            </li>
          </ul>
        </div>
        <div>
          <img src={darkLogo} alt="" />
        </div>
      </div>
      <TryoutForm />
      <div className="absolute hidden w-full text-center bottom-10 lg:block">
        <div className="m-auto font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim venia
        </div>
      </div>
    </div>
  );
};

export default TryoutPage;
