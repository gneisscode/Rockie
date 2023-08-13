import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col gap-[25.14px] justify-center items-center mt-[126.11px]">
        <div className="flex text-[32px]">Join Our Newsletter</div>
        <div className=" flex justify-between w-[80%] lg:w-[587.52px] h-[48.46px] bg-white ">
          <input
            placeholder="Enter Your Email Address"
            className=" text-black p-4 outline-none border-none w-[70%] lg:w-[calc(100%-131.95px)] h-[48.46px]"
          />
          <button className="bg-black text-white w-[30%] lg:w-[131.95px] h-[48.46px]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-center items-ceter bg-[#212121] w-[100%] h-[100px] lg:h-[70.65px] mt-[86.41px]">
        <div className="flex flex-col lg:flex-row w-[100%] lg:px-[68.89px] h-[100%] p-2 lg:p-0 justify-between items-center">
          <div className="flex gap-[19.85px]">
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
          </div>

          <div>Rockie | All Rights Reserved</div>

          <div className=" flex gap-[35.81px]">
            <img src="/images/bxl-facebook.svg" />
            <img src="/images/akar-icons-twitter-fill.svg" />
            <img src="/images/akar-icons-linkedin-fill.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer