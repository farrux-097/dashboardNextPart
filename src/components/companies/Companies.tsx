import { memo } from 'react';
import img1 from "@/assets/Group.svg"
import img2 from "@/assets/zara-logo-1 1.svg"
import img3 from "@/assets/gucci-logo-1 1.svg"
import img4 from "@/assets/prada-logo-1 1.svg"
import img5 from "@/assets/Group (1).svg"
import Image from 'next/image';

const Companies = () => {
    const logos = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

    return (
        <div className="w-full h-[122px] bg-black overflow-hidden flex justify-center items-center">
            <div className="flex items-center h-full animate-scroll whitespace-nowrap">
                {[...logos, ...logos].map((logo, i) => (
                    <Image key={i} src={logo} alt="company logo" className="h-[36px] mx-8 inline-block" />
                ))}
            </div>
        </div>
    );
};

export default memo(Companies);