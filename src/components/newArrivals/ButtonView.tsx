"use client"
import { memo } from 'react';

const ButtonView = () => {

    const handleClick = () => {
        console.log(":(");
    };

    return (
        <div className="w-full flex justify-center mb-[64px]">
            <button
                className='bg-white text-black py-[16px] px-[80px] rounded-[62px] mb-[64px] border border-black/[0.1] duration-300 hover:bg-[#f7f7f7] active:scale-[0.97]'
                onClick={handleClick}
            >
                Show All
            </button>
        </div>
    );
};

export default memo(ButtonView);