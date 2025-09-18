"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

const ProductImage: FC<{ title: string; image: string; id: number }> = (props) => {
  const { title, image, id } = props;
  const router = useRouter();

  return (
    <div
      className="relative w-full h-48 bg-gray-800 overflow-hidden cursor-pointer rounded-t-lg"
      onClick={() => router.push(`/product/${id}`)}
    >
      <Image
        src={"https://api.errorchi.uz/product/image/" + image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority
      />
    </div>
  );
};

export default memo(ProductImage);
