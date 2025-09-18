import { memo } from 'react';
import bgImage from "@/assets/Rectangle 2.png"

const Hero = () => {
    return (
        <div className={`w-full min-h-screen bg-[#f2f0f1] bg-cover bg-center`} style={{ backgroundImage: `url('${bgImage.src}')` }}>
            <div className="container">
                <h2 className='font-bold text-[64px] leading-[100%] max-w-[577px] text-black pt-[103px] mb-[32px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                <p className='font-normal text-[16px] leading-[137%] max-w-[545px] mb-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='bg-black text-white py-[16px] px-[54px] rounded-[62px] mb-[48px]'>Shop Now</button>
                <div className="max-w-[596px] flex items-center gap-[64px]">
                    <div className="flex flex-col justify-center">
                        <p className='font-bold text-[40px]'>200+</p>
                        <p className='font-normal text-[16px] leading-[137%] text-black/[0.6]'>International Brands</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className='font-bold text-[40px]'>2,000+</p>
                        <p className='font-normal text-[16px] leading-[137%] text-black/[0.6]'>High-Quality Products</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className='font-bold text-[40px]'>30,000+</p>
                        <p className='font-normal text-[16px] leading-[137%] text-black/[0.6]'>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);