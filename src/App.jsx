import react, { useRef, useState } from "react";
import "./App.css";
import Categories from "./Categories";
import Creators from "./Creators";
import FeaturedContent from "./FeaturedContent";
import Trusted from "./Trusted";
import Footer from "./Footer";
import AnimateY from "./animations/AnimateY";
import AnimateX from "./animations/AnimateX";

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = (e) => {
    setMobileNav(!mobileNav);
  };
  const navItems = ["About", "Brands", "Content", "Pricing", "FAQs"];
  return (
    <div className=" bg-[#1E1E1E] w-[100%] min-h-[100vh] text-white font-Didact Gothic">
      <div className="hidden lg:flex justify-center w-[100%] min-h-[96.48px] border-b border-[#817f7f]">
        <div className=" min-w-[195.3px] min-h-[100%] flex justify-center items-center border-r border-[#817f7f] font-bold text-[40px] px-[65px]">
          Rockie.
        </div>
        <div className="flex justify-center items-center min-w-[60%] border-r border-[#817f7f] gap-[46.86px] px-[68px] font-medium">
          {navItems.map((item, index) => {
            return (
              <div>
                <div
                  key={index}
                  className="cursor-pointer hover:text-[#817f7f]"
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex self-center m-auto cursor-pointer font-medium justify-center items-center min-w-[81.22px] h-[24.52px] px-[40px] py-[20px] border border-[#817f7f]">
          Log In
        </div>
      </div>

      {mobileNav ? (
        <div className=" menu flex flex-col w-[100%] h-[100vh] bg-[#1E1E1E] z-50">
          <i
            className="fa-solid fa-xmark self-end pr-8 pt-4 text-[30px]"
            onClick={(e) => {
              handleClick(e);
            }}
          ></i>
          <div className="flex flex-col justify-center items-center min-w-[60%] border-[#817f7f] gap-[46.86px] px-[68px] font-medium">
            {navItems.map((item, index) => {
              return (
                <div>
                  <div
                    key={index}
                    className="cursor-pointer hover:text-[#817f7f]"
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className=" flex  justify-center w-[100%] min-h-[96.48px] border-b border-[#817f7f] lg:hidden">
            <div className="w-[195.3px] min-h-[100%] flex justify-start items-center border-r border-[#817f7f] font-bold text-[40px] ">
              Rockie.
            </div>

            <div className=" flex items-center">
              <i
                className="fa-solid fa-bars text-[30px] text-center ml-[150%]"
                onClick={(e) => {
                  handleClick(e);
                }}
              ></i>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row px-2 lg:pl-[64.81px] mt-[45.83px] lg:mt-[85.83px] gap-[67.94px] lg:gap-[250px]">
            <AnimateX>
              <div className="flex flex-col w-[100%] lg:w-[473.83px]">
                <div className=" font-normal text-[40px] lg:text-[50px]">
                  <div>
                    The
                    <span className="italic">
                      &nbsp;Platform
                      <div className="flex justify-center mr-24">
                        <img src="/images/line.svg" />
                      </div>
                    </span>
                    for Content Creators
                  </div>
                </div>
                <div className=" leading-[28px] font-light mt-[14.34px]">
                  You deserve a space to share your stories, essays and
                  photography with the world. So we built rockie to help you
                  make your time and work as much of an investment as possible.
                </div>
                <div className="flex h-max mt-[47.17px]">
                  <div className="flex flex-col justify-center items-center  border-r border-[#817f7f] pr-[23px]">
                    <div className=" font-bold text-[30px]">2.8k</div>
                    <div className="text-xs">Content Creators</div>
                  </div>
                  <div className="flex flex-col justify-center items-center pl-[23px]">
                    <div className=" font-bold text-[30px]">5.3M</div>
                    <div className="text-xs">Projects Created</div>
                  </div>
                </div>
              </div>
            </AnimateX>

            <AnimateY>
              <div className="flex flex-col pl-4 lg:pl-0 gap-[35.62px]">
                <div className="relative flex gap-[84.07px]">
                  <div className="relative">
                    <img src="/images/rectangle-540.svg" />
                    <img
                      src="/images/image-man.svg"
                      className="absolute top-[5.5px] right-[15.5px]"
                    />
                    <img
                      src="/images/star-3.svg"
                      className=" absolute top-[-5.5px] right-[-15.5px]"
                    />
                  </div>
                  <div className="relative">
                    <img src="/images/ellipse-137.svg" />
                    <img
                      src="/images/image-man-2.svg"
                      className=" absolute top-[2.75px] right-[7.75px]"
                    />
                    <img
                      src="/images/star-5.svg"
                      className=" absolute top-[-12.5px] right-[-34.75px]"
                    />
                  </div>
                  <img src="/images/squigly.svg" className="absolute " />
                </div>
                <div className="relative flex pl-[62.96px] gap-[80.57px]">
                  <div className="relative">
                    <img src="/images/ellipse-138.svg" />
                    <img
                      src="/images/image-lady.svg"
                      className="absolute top-[-10.5px]"
                    />
                  </div>
                  <div className="relative mt-[-44px]">
                    <img src="/images/rectangle-539.svg" />
                    <img
                      src="/images/image-lady-two.svg"
                      className=" absolute top-[2.75px] right-[7.75px]"
                    />
                    <img
                      src="/images/star-3.svg"
                      className=" absolute top-[-82.5px] right-[24.75px]"
                    />
                  </div>
                </div>
              </div>
            </AnimateY>
          </div>

          <Categories />

          <Creators />

          <FeaturedContent />
          <Trusted />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
