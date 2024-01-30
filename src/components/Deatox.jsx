import React from "react";
import logo from "../assets/Logo.png";
import rectangle from "../assets/rectangle.png";

const Deatox = () => {
  return (
    <div className="relative h-screen pt-20">
      <div className="flex items-center">
        <div className="ml-[8.5rem]">
          <h1 className="font-oswald tracking-wide font-medium text-6xl text-white z-10 w-[19.5rem] text-center pb-2">
            DEATOX
          </h1>
          <h1 className="font-oswald text-dark-yellow font-extralight text-6xl z-10 w-[19.5rem] text-center">
            PACKAGE
          </h1>
        </div>
        <div className="w-[28rem] ml-16">
          <h1 className="text-4xl text-dark-yellow font-oswald">
            Get your fitness plan for free!
          </h1>
          <p className="py-2 text-xl leading-6 text-dark-grey">
            Join the Deatox community today and start your journey towards a
            healthier and happier you.{" "}
          </p>
        </div>
      </div>

      <div className="py-9 z-50 flex justify-between mx-[8.5rem]">
        <div className="w-[18rem] relative h-96 overflow-hidden bg-dark-yellow z-20 flex justify-center items-center flex-col shadow shadow-dark-grey">
          <div className="absolute h-16 -rotate-45 select-none bg-dark-grey -top-5 -left-10 -z-10 w-28 text-dark-grey">
            Text
          </div>
          <div className="absolute mr-5 rounded-full bg-dark-grey top-4 left-4">
            <img src={logo} alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-dark-grey pt-8 pb-2 h-[35%]">
              <h1 className="text-2xl font-medium text-white font-oswald">
                MONTHLY
              </h1>
              <h4 className="text-3xl tracking-wide">$9.99</h4>
            </div>
            <ul className="list-disc text-sm pl-5 h-[54%]">
              <li className="pt-2">Customized workout plans</li>
              <li className="pt-2">Access to healthy recipes</li>
              <li className="pt-2">Advanced health tracking tools</li>
              <li className="pt-2">
                Personalized recommendations based on your goals
              </li>
              <li className="py-2">Unlimited customer support </li>
            </ul>
            <button className="bg-dark-grey text-white w-full py-1 my-1 h-[11%]">
              GET NOW
            </button>
          </div>
        </div>

        <div className="w-[18rem] relative h-96 overflow-hidden bg-dark-yellow z-20 ml-[8.5rem] flex justify-center items-center flex-col shadow shadow-dark-grey">
          <div className="absolute h-16 -rotate-45 select-none bg-dark-grey -top-5 -left-10 -z-10 w-28 text-dark-grey">
            Text
          </div>
          <div className="absolute mr-5 rounded-full bg-dark-grey top-4 left-4">
            <img src={logo} alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-dark-grey pt-8 pb-2 h-[35%]">
              <h1 className="text-2xl font-medium text-white font-oswald">
                YEARLY
              </h1>
              <span className="text-3xl tracking-wide text-white line-through decoration-dark-grey">
                $99.99
              </span>
              <span className="pl-1 text-xl tracking-wide decoration-dark-grey text-dark-grey">
                $99.99
              </span>
            </div>
            <ul className="list-disc text-sm pl-5 h-[54%]">
              <li className="pt-2">Customized workout plans</li>
              <li className="pt-2">Access to healthy recipes</li>
              <li className="pt-2">Advanced health tracking tools</li>
              <li className="pt-2">
                Personalized recommendations based on your goals
              </li>
              <li className="py-2">Unlimited customer support </li>
            </ul>
            <button className="bg-dark-grey text-white w-full py-1 my-1 h-[11%]">
              GET NOW
            </button>
          </div>
        </div>

        <div className="w-[18rem] relative h-96 overflow-hidden bg-white z-20 ml-[8.5rem] flex justify-center items-center flex-col shadow shadow-dark-grey">
          <div className="absolute h-16 -rotate-45 select-none bg-dark-yellow -top-5 -left-10 -z-10 w-28 text-dark-yellow">
            Text
          </div>
          <div className="absolute mr-5 rounded-full bg-dark-grey top-4 left-4">
            <img src={logo} alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-dark-yellow pt-8 pb-2 ">
              <h1 className="text-dark-grey text-2xl font-medium font-oswald h-[35%] ">
                ENTERPRISE
              </h1>
              <span className="text-3xl tracking-wide text-white decoration-dark-grey">
                L
              </span>
            </div>
            <ul className="pl-5 text-sm list-disc pb-14">
              <li className="pt-2 h-[54%]">
                Looking to offer personalized fitness and meal plans to your
                employees?
              </li>
              <li className="pt-2">
                Our Enterprise Plan brings you the best features.
              </li>
            </ul>
            <button className="w-full py-1 my-1 bg-dark-yellow text-dark-grey">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-16 right-10">
        <img src={rectangle} alt="" className="h-[80vh] select-none" />
      </div>
    </div>
  );
};

export default Deatox;
