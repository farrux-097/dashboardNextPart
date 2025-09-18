import { Input } from "antd";
import { memo } from "react";
import { MailOutlined } from '@ant-design/icons';
import logo from "@/assets/SHOP.CO.svg"
import Image from "next/image";
import s1 from "@/assets/1.svg"
import s2 from "@/assets/2.svg"
import s3 from "@/assets/3.svg"
import s4 from "@/assets/4.svg"
import card1 from "@/assets/Badge.svg"
import card2 from "@/assets/Badge (1).svg"
import card3 from "@/assets/Badge (2).svg"
import card4 from "@/assets/Badge (3).svg"
import card5 from "@/assets/Badge (4).svg"


const Footer = () => {
  return (
    <div className="bg-[#f0f0f0] h-[550px]">
      <div className="container">
        <footer className="relative">
          <div className="w-full bg-black absolute -top-[90px] -right-1/2 left-1/2 -translate-x-1/2 h-[180px] rounded-[20px] px-[64px] py-[36px] flex justify-between items-center">
            <h2 className="font-bold text-[40px] leading-[112%] text-white max-w-[551px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className="flex flex-col justify-center items-center gap-[12px]">
              <Input size="middle" className='!w-[349px] !h-[48px] !rounded-[62px] !bg-[#f0f0f0] flex items-center gap-[12px] !py-[12px] !px-[8px] !border-none' classNames={{ prefix: '!text-black/[0.5]' }} placeholder="Enter your email address" prefix={<MailOutlined />} />
              <button className="font-medium text-[16px] bg-[#fff] px-[89px] py-[12px] rounded-[62px] duration-300 hover:bg-[#f3f3f3] active:scale-[0.97]">Subscribe to Newsletter</button>
            </div>
          </div>
          <div className="pt-[140px] flex justify-between items-center mb-[50px]">
            <div className="max-w-[248px]">
              <Image src={logo} alt="logo" className='mb-[25px]' />
              <p className="font-normal text-[14px] leading-[157%] text-black/[0.6] mb-[35px]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
              <div className="mb-[50px] flex items-center gap-[12px]">
                <Image src={s1} alt="logo" />
                <Image src={s2} alt="logo" />
                <Image src={s3} alt="logo" />
                <Image src={s4} alt="logo" />
              </div>
            </div>
            <div className="max-w-[100px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">Company</h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">About</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">Features</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6] mb-[20px]">Works</p>
              <p className="font-normal text-[16px] leading-[119%] text-black/[0.6]">Csreer</p>
            </div>
            <div className="max-w-[156px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                Help
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Customer Support
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Delivery Details
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Terms & Conditions
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Privacy Policy
              </p>
            </div>
            <div className="max-w-[149px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                FAQ
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Account
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Manage Deliveries
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Orders
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Payments
              </p>
            </div>
            <div className="max-w-[169px]">
              <h3 className="font-medium text-[16px] leading-[112%] text-black mb-[22px] tracking-[0.19em] uppercase">
                Resources
              </h3>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Free eBooks
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                Development Tutorial
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60 mb-[20px]">
                How to - Blog
              </p>
              <p className="font-normal text-[16px] leading-[119%] text-black/60">
                Youtube Playlist
              </p>
            </div>
          </div>
          <hr className="text-[#000]/[0.1] mb-[25px]" />
          <div className="w-full flex justify-between items-center">
            <p className="font-normal text-[14px] text-[#000]/[0.6]">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center">
              <Image src={card1} alt="card1" />
              <Image src={card2} alt="card2" />
              <Image src={card3} alt="card3" />
              <Image src={card4} alt="card4" />
              <Image src={card5} alt="card5" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default memo(Footer);
