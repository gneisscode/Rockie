import React from "react";

const Creators = () => {
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
    <div>
      <div className="w-[100%]  mt-[48px] pl-[64.81px]">
        <div className="w-[228px] font-normal text-4xl">
          Top
          <span>
            &nbsp;Creators
            <div className="flex justify-center ml-20 mt-2">
              <img src="/images/line.svg" />
            </div>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[27.44] mt-[35px] w-[100%] lg:pr-[80.89px]">
          {creators.map(({ name, content, image }, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-2 mb-4">
                <img src={image} className="lg:w-[314px] lg:h-[314px]" />
                <div className=" text-[18px] font-medium">{name}</div>
                <div className=" font-normal text-sm">{content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Creators;
