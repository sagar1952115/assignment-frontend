import React from "react";

const TryoutForm = () => {
  return (
    <div className="w-full h-screen px-10 py-12 lg:w-1/2 lg:px-40">
      <h1 className="text-3xl  text-[#545454] font-bold py-6">
        Enterprise Plan Request!
      </h1>
      <form action="" className="flex flex-col">
        <label htmlFor="" className="text-[#989898]">
          Full Name
        </label>
        <input
          type="email"
          className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded"
          placeholder="umartinez@gmail.com"
        />

        <label htmlFor="" className="text-[#989898]">
          Company Name
        </label>
        <input
          type="text"
          className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded"
          placeholder=""
        />

        <label htmlFor="" className="text-[#989898]">
          Phone Number
        </label>
        <input
          type="number"
          className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded"
          placeholder=""
        />

        <label htmlFor="" className="text-[#989898]">
          Remarks
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="rounded resize-none border border-[#989898] px-3 py-2"
        ></textarea>

        <button type="submit" className="bg-[#F3DE53] py-3 my-7">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TryoutForm;
