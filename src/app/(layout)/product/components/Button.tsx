"use client"
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const Button = () => {
    const router = useRouter();

    return (
        <div className="Button">
            <button className="mb-10 bg-indigo-700 rounded-[12px] pointer text-white py-2 px-4 absolute top-4 left-4" onClick={() => router.back()}>Go back</button>
        </div>
    );
};

export default memo(Button);