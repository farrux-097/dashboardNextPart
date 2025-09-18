import { memo } from 'react';
import img1 from "@/assets/image 11.svg"
import img2 from "@/assets/image 13.svg"
import img3 from "@/assets/image 12.svg"
import img4 from "@/assets/image 14.svg"

const DressStyles = () => {
    return (
        <div className="container">
            <div className="min-h-screen mb-[80px] w-full rounded-[40px] bg-[#f0f0f0] mt-[16px] px-[64px] !py-[72px]">
                <h2 className='font-bold text-[48px] text-center mb-[64px]'>BROWSE BY DRESS STYLE</h2>
                <div className="grid grid-cols-5 gap-[20px]">
                    <div className={`w-full h-[289px] bg-white rounded-[20px] col-span-2 px-[36px] py-[25px] font-bold text-[36px] !bg-cover !bg-center duration-300 hover:scale-[1.02]`} style={{background: `url("${img1.src}")`}}>Casual</div>
                    <div className={`w-full h-[289px] bg-white rounded-[20px] col-span-3 px-[36px] py-[25px] font-bold text-[36px] !bg-cover !bg-center duration-300 hover:scale-[1.02]`} style={{background: `url("${img2.src}")`}}>Formal</div>
                    <div className={`w-full h-[289px] bg-white rounded-[20px] col-span-3 px-[36px] py-[25px] font-bold text-[36px] !bg-cover !bg-center duration-300 hover:scale-[1.02]`} style={{background: `url("${img3.src}")`}}>Party</div>
                    <div className={`w-full h-[289px] bg-white rounded-[20px] col-span-2 px-[36px] py-[25px] font-bold text-[36px] !bg-cover !bg-center duration-300 hover:scale-[1.02]`} style={{background: `url("${img4.src}")`}}>Gym</div>
                </div>
            </div>
        </div>
    );
};

export default memo(DressStyles);