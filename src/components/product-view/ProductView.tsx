import { FC, memo } from 'react';
import ProductImage from './ProductImage';

const ProductView: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-950 min-h-screen">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-800"
        >
          <div className="w-full h-48 bg-gray-800">
            <ProductImage title={item.title} image={item.images[0]} id={item.id} />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">
              {item.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold text-lg">
                ${item.price}
              </span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {item.category?.name}
              </span>
            </div>

            <div className="text-sm text-gray-300 space-y-1">
              <p>
                <span className="font-medium text-gray-400">Brand:</span>{' '}
                {
                  item.brand?
                  item.brand
                  :
                  'None'

                }

              </p>
              <p>
                <span className="font-medium text-gray-400">Stock:</span>{' '}
                {item.stock}
              </p>
              <p className="truncate">
                <span className="font-medium text-gray-400">Seller:</span>{' '}
                {item.user?.fname}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductView);
