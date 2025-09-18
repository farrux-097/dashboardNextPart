"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, memo } from 'react';

const ImageClick:FC<{item: any}> = ({item}) => {

    const router = useRouter();

    return (
        <div key={item.id} className="bg-[#f0eeed] rounded-[20px] w-[295px] h-[298px] mb-[16px]">
            <Image onClick={() => router.push(`/product/${item?.id}`)} src={`https://api.errorchi.uz/product/image/${item?.images[0]}`} alt="newArrivals" width={300} height={300} className='w-full h-full object-cover rounded-[20px]' />
        </div>
    );
};

export default memo(ImageClick);