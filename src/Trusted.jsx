import React from 'react'

const Trusted = () => {
  return (
    <div className=" max-w-[100%] flex flex-col lg:flex-row lg:justify-center gap-[91.08px] mt-[157.86px] px-2 lg:px-[64.81px]">
      <div className="flex flex-col gap-[36px] lg:w-[50%] flex-wrap">
        <div className=' lg:w-[176px] text-[20px] font-semibold'>Trusted By 2.8K Content Creators.</div>
        <div className='w-[366.82px] text-base'>
          Doubling as a creative community, Rockie is the perfect place to share
          your passions and find your tribe. From creators to bloggers,
          influencers and experts in every field who are passionate about
          sharing their projects.
        </div>
        <div className="flex flex-col gap-[20.04px]">
          <div className=" text-sm underline">Register as a user</div>
          <div className=" text-sm underline">Register as a creator</div>
        </div>
      </div>

      <div className='flex justify-center lg:justify-start gap-[35.83px]'>
        <img src="/images/trusted-1.svg" alt="" />
        <img src="/images/trusted-2.svg" alt="" />
      </div>

    </div>
  );
}

export default Trusted