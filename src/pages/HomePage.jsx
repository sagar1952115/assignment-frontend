import React from "react";
import HomepageHeader from "../components/HomepageHeader";
import LandingComponent from "../components/LandingComponent";
import Deatox from "../components/Deatox";
import Features from "../components/Features";
import HomepageFooter from "../components/HomepageFooter";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="bg-[#545454] h-[300vh] w-[19.5rem] mx-[8.5rem] -z-0 absolute"></div>
      <HomepageHeader />
      <div className="bg-gradient-to-b from-[#F9D326] to-[#545454]">
        <LandingComponent />
        <Features />
        <Deatox />
      </div>
      <HomepageFooter />
    </div>
  );
};

export default HomePage;
