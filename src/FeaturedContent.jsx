import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const FeaturedContent = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center end"],
  });
  return (
     <motion.div ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress}} className="w-[100%]  mt-[48px] px-2 lg:px-[64.81px] font-Didact Gothic">
      <div className="w-[228px] font-normal text-4xl">
        Featured
        <span>
          &nbsp;Content
          <div className="flex justify-center ml-44 mt-2">
            <img src="/images/line.svg" className=" min-w-[99.45px]" />
          </div>
        </span>
      </div>

      <div className="w-[100%] flex relative justify-center md:gap-[46.71px] mt-[74.51px]">
        <img src="/images/car-left.svg" alt="" className=" hidden lg:block" />
        <img src="/images/car-center.svg" alt="" />
        <img src="/images/car-right.svg" alt="" className=" hidden lg:block" />
        <div className=" w-[100%] md:w-[80%] flex justify-between absolute bottom-[-80px]  ">
          <div className="flex justify-center items-center w-[34.52px] h-[34.52px] bg-white cursor-pointer">
            <img src="/images/arrow-left.svg" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className=" font-bold text-center">
              Travel: 10 Places You Should Visit This Summer
            </div>
            <div className=" text-sm">Kiara Prisha</div>
          </div>
          <div className="flex justify-center items-center w-[34.52px] h-[34.52px] bg-white cursor-pointer">
            <img src="/images/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedContent;
