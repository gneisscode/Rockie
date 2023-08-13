import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Creators = () => {
   const ref = useRef();
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start end", "center end"],
   });
  const creators = [
    {
      name: "Kevin Smith",
      content: "Fashion",
      image: "/images/creator-one.svg",
    },
    {
      name: "Alexa Brown",
      content: "Business",
      image: "/images/creator-two.svg",
    },
    {
      name: "Kiara Prisha",
      content: "Travel",
      image: "/images/creator-three.svg",
    },

    {
      name: "Anders Johan",
      content: "Self-growth",
      image: "/images/creator-four.svg",
    },

    {
      name: "Josef Jouri",
      content: "Science",
      image: "/images/creator-five.svg",
    },

    {
      name: "Mia Sophia",
      content: "Technology",
      image: "/images/creator-six.svg",
    },
  ];
  return (
    <motion.div ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress}}>
      <div className="w-[100%]  mt-[48px] px-2 lg:pl-[64.81px] font-Didact Gothic">
        <div className="w-[228px] font-normal text-4xl">
          Top
          <span>
            &nbsp;Creators
            <div className="flex justify-center ml-10 mt-2">
              <img src="/images/line.svg" className="min-w-[99.45px]" />
            </div>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[27.44] mt-[35px] w-[100%] lg:pr-[80.89px]">
          {creators.map(({ name, content, image }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 mb-4"
              >
                <img src={image} className="lg:w-[314px] lg:h-[314px]" />
                <div className=" text-[18px] font-bold">{name}</div>
                <div className=" font-normal text-sm">{content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Creators;
