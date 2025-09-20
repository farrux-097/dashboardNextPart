'use client'
import { memo, useState } from 'react';
import xbtn from "@/assets/Frame.svg";
import Image from 'next/image';
import logo from "@/assets/SHOP.CO.svg"
import arrow from "@/assets/Frame (1).svg"
import { useRouter } from 'next/navigation';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import cart from "@/assets/Frame (2).svg"
import profile from "@/assets/Frame (3).svg"

const Header = () => {
  const handleSignIn = () => {
    open("https://lesson-8-3-loyiha.vercel.app/");
  };

  const [show, setShow] = useState<boolean>(true);

  const router = useRouter()

  return (
    <>
      {
        show &&
        <div className={`h-[38px] w-full bg-black flex justify-center items-center relative`}>
          <p className='text-center text-white font-light text-[14px] '>Sign up and get 20% off to your first order. <span onClick={handleSignIn} className='font-semibold underline cursor-pointer'>Sign Up Now</span></p>
          <Image src={xbtn} alt="xbtn" className='absolute right-[100px] top-1/2 translate-y-[-50%] cursor-pointer' onClick={() => setShow(false)} />
        </div>
      }
      <header className="container bg-white w-full h-[96px] flex justify-between items-center gap-[40px] border-b border-[#000]/[0.1]">
        <Image src={logo} alt="logo" className='cursor-pointer' onClick={() => router.push("/")} />
        <div className="max-w-[321px] flex justify-between items-center gap-[24px]">
          <div className="flex items-center gap-[4px]" onClick={() => router.push("/shop")}>
            <p className='font-normal text-[16px] '>Shop</p>
            <Image src={arrow} alt="arrow" className='cursor-pointer' />
          </div>
          <div className="" onClick={() => router.push("/shop")}>
            <p className='font-normal text-[16px]'>On Sale</p>
          </div>
          <div className="" onClick={() => router.push("/shop")}>
            <p className='font-normal text-[16px]'>New Arrivals</p>
          </div>
          <div className="" onClick={() => router.push("/shop")}>
            <p className='font-normal text-[16px]'>Brands</p>
          </div>
        </div>
        <Input size="middle" className='!w-[477px] !h-[48px] !rounded-[62px] !bg-[#f0f0f0] flex items-center gap-[12px] !py-[12px] !px-[8px] !border-none' classNames={{ prefix: '!text-black/[0.5]' }} placeholder="Search for products..." prefix={<SearchOutlined />} />
        <div className="w-[64px] h-[24px] flex justify-center items-center gap-[14px]">
          <Image src={cart} alt="cart" className='cursor-pointer' />
          <Image onClick={() => router.push("/profile")} src={profile} alt="cart" className='cursor-pointer' />
        </div>
      </header>
    </>
  );
};

export default memo(Header);
