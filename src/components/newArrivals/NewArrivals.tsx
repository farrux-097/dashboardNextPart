import { Tag } from 'antd';
import { FC, memo } from 'react';
import ButtonView from './ButtonView';
import ImageClick from './ImageClick';

interface Icategory {
    id: number;
    name: string;
}

interface Idata {
    id: number;
    title: string;
    images: string;
    category: Icategory;
    price: number
}

interface Props {
    data: Idata[]
    text: string
}

const NewArrivals: FC<Props> = ({ data, text }) => {
    return (
        <div className="container w-full">
            <h2 className='font-bold text-[48px] text-center mt-[72px] mb-[55px]'>{text ? text : ""}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mb-[36px]">
                {
                    data?.map((item: Idata) => (
                        <div key={item.id} className="w-[295px] max-h-[408px] h-full">
                            <ImageClick item={item} />
                            <p title={item.title} className='font-bold text-[20px] line-clamp-1 mb-[8px] '>{item.title}</p>
                            <Tag color="geekblue" className='mb-[8px]'>{item.category?.name}</Tag>
                            <p className='font-bold text-[24px]'>${item.price}</p>
                        </div>
                    ))

                }
            </div>
            <ButtonView />
        </div>
    );
};

export default memo(NewArrivals);