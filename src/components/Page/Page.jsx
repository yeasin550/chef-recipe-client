import React from "react";
import logo from "../../assets/logo.png";
import image from '../../assets/images.jpeg'
const Page = () => {
  return (
    <div
      className="p-4"
      
     
    >
      <div className="mx-12 mt-5 lg:flex gap-6">
        <img className="w-[500px] rounded-md lg:h-80 " src={logo} alt="" />
        <div className="flex items-center text-xl">
          <div>
            <h1 className="text-3xl text-purple-500 font-semibold text-center mb-3 ">
              Modern recipes and cooking advice
            </h1>
            <p className="text-justify">
              With the advent of the printing press in the 16th and 17th
              centuries, numerous books were written on how to manage households
              and prepare food. In Holland[12] and England[13] competition grew
              between the noble families as to who could prepare the most lavish
              banquet. By the 1660s, cookery had progressed to an art form and
              good cooks were in demand. Many of them published their own books
              detailing their recipes in competition with their rivals.[14] Many
              of these books have been translated and are available online.
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Page;
