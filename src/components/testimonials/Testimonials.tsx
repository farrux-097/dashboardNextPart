import { Card, Rate } from "antd";
import { FC, memo } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import verified from "@/assets/Frame (4).svg";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        verified: true,
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        id: 2,
        name: "Alex K.",
        verified: true,
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
        id: 3,
        name: "James L.",
        verified: true,
        rating: 4,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
];

const Testimonials: FC<any> = ({ text }) => {
    return (
        <div className="container mx-auto py-10">
            <div className="mb-[170px]">
                <div className="flex justify-between items-center">
                    {text &&
                        <>
                            <h2 className="text-[48px] font-bold mb-[40px]">OUR HAPPY CUSTOMERS</h2>
                            <div className="flex justify-center items-center gap-[10px]">
                                <LeftOutlined />
                                <RightOutlined />
                            </div>
                        </>
                    }
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {testimonials.map((item) => (
                        <Card key={item.id} className="!rounded-[20px] !w-[400px] !min-h-[240px] !px-[18px] !pt-[18px] !pb-[40px] border border-[#000]/[0.1]">
                            <Rate disabled defaultValue={item.rating} className="!w-[138px] !mb-[15px]" />
                            <div className="flex items-center gap-[5px]">
                                <p className="font-bold text-[20px] leading-[110%]">{item.name}</p>
                                <Image src={item.verified ? verified : ""} alt="verified" className="inline-block ml-[5px]" />
                            </div>
                            <p className="text-gray-600 mt-2">{item.text}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(Testimonials);
