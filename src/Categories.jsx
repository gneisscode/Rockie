import React from 'react'

const Categories = () => {
    const categories = [
      { label: "All", value: "5.3M" },
      { label: "Business", value: "1.6M" },
      { label: "Entertainment", value: "1.2M" },
      { label: "Fashion", value: "1.5M" },
      { label: "Science", value: "9.1K" },
      { label: "Self-growth", value: "6K" },
      { label: "Technology", value: "1.1M" },
      { label: "Travel", value: "3K" },
    ];
  return (
    <div className=" hidden lg:grid grid-cols-4 px-2 lg:px-[69px] py-8 lg:gap-[98px] mt-[80.57px] w-[100%] h  bg-[#212121]">
      {categories.map(({label, value}, index) => {
        return (
            <div key={index} className='flex gap-2'>
                <div className='text-4xl self-end'>{label}</div>
                <div className='text-xs self-end'>{value}</div>
            </div>
        )
      })}
    </div>
  );
}

export default Categories