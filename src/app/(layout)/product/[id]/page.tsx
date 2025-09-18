import Image from "next/image";
import { memo } from "react";
import { Tag } from "antd";
import Testimonials from "@/components/testimonials/Testimonials";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;



  return (
    <>
      <div className="container">
        <div className="min-h-screen !mt-[-50px] bg-gradient-to-br relative p-10 flex items-center justify-center gap-[40px] mb-[90px]">
          <div className="flex gap-[14px] justify-center items-center">
            <div className="flex flex-col gap-[14px] items-center">
              {
                product?.images?.map((image: string, index: number) => (
                  <div key={index} className="w-[152px] h-[167px] rounded-[20px] overflow-hidden bg-[#f0eeed]">
                    <Image src={`https://api.errorchi.uz/product/image/${image}`} className="w-full h-full object-cover" alt={product?.title} width={500} height={500} />
                  </div>
                ))
              }
            </div>
            <div className="w-[444px] h-[530px] rounded-[20px] bg-[#f0eeed] overflow-hidden">
              <Image src={`https://api.errorchi.uz/product/image/${product?.images[0]}`} className="w-full h-full object-cover" alt={product?.title} width={500} height={500} />
            </div>
          </div>
          <div className="w-[600px]">
            <h2 className="font-bold text-[40px] text-black uppercase mb-[4px]">{product?.title}</h2>
            <div className="flex items-center gap-[7px] font-normal text-[16px] text-black/[0.6] mb-[10px]">
              <p>Category:</p>
              <Tag color="default">{product?.category?.name}</Tag>
            </div>
            <div className="flex items-center gap-[12px] mb-[18px]">
              <p className="font-bold text-[32px] text-black">${product?.price}</p>
              <p className="font-bold text-[32px] text-black/[0.2] line-through">${product?.price}</p>
              <Tag bordered={false} color="red" className="!rounded-full !w-[72px] !h-[34px] !text-[#ff3333] font-medium !text-[16px]  !flex !justify-center !items-center">-{product?.discount ? product.discount : "20"}%</Tag>
            </div>
            <p className="font-normal text-[16px] leading-[137%] text-black/[0.6] mb-[22px]">{product?.description}</p>
            <hr className="text-[#000]/[0.1] mb-[22px] h-[2px]" />
            <p className="font-normal text-[16px] text-black/[0.6] mb-[16px]">Select Colors</p>
            <div className="flex items-center gap-[16px] mb-[24px]">
              <div className="size-[37px] rounded-full bg-[#4F4631]"></div>
              <div className="size-[37px] rounded-full bg-[#314F4A]"></div>
              <div className="size-[37px] rounded-full bg-[#31344F]"></div>
            </div>
            <hr className="text-[#000]/[0.1] mb-[22px] h-[2px]" />
            <p className="font-normal text-[16px] text-black/[0.6] mb-[16px]">Choose size</p>
            <div className="flex items-center gap-[16px] mb-[24px]">
              <button className="flex justify-center items-center size-[37px] rounded-[62px] h-[47px] !px-[24px] !py-[12px] w-[80px] bg-[#f0f0f0]">Small</button>
              <button className="flex justify-center items-center size-[37px] rounded-[62px] h-[47px] !px-[24px] !py-[12px] w-[100px] bg-[#f0f0f0]">Medium</button>
              <button className="flex justify-center items-center size-[37px] rounded-[62px] h-[47px] !px-[24px] !py-[12px] w-[85px] bg-[#000] text-white">Large</button>
              <button className="flex justify-center items-center size-[37px] rounded-[62px] h-[47px] !px-[24px] !py-[12px] w-[110px] bg-[#f0f0f0]">X-Large</button>
            </div>
            <hr className="text-[#000]/[0.1] mb-[22px] h-[2px]" />
            <div className="flex items-center gap-[20px]">
              <div className="flex justify-between items-center w-[170px] py-[15px] bg-[#f0f0f0] h-[52px] rounded-[62px] px-[20px]">
                <p className="font-medium text-[24px]">-</p>
                <p className="font-medium text-[16px]">1</p>
                <p className="font-medium text-[24px]">+</p>
              </div>
              <button className="font-medium text-[16px] w-full py-[15px] bg-black text-white rounded-[62px]">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-[28px] container !mb-[32px]">All Reviews</h3>
      <Testimonials />
    </>
  );
};

export default memo(Detail);
