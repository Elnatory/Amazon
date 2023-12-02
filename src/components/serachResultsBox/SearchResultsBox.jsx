import React from 'react';
import RatingsAverage from '../ratings/RatingsAverage';


const SearchResultBox = ({ result }) => {
  const { title, imageCover, price, quantity, ratingsAverage, ratingsQuantity, priceAfterDiscount, brand } = result;

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md" style={{ height: '33rem' }}>
      {/* Product Image */}
      <div className='flex justify-center align-middle'>
        {imageCover && <img src={imageCover} alt={title} className="max-w-full h-60 object-cover mb-4" />}

      </div>
      {/* Product Title and brand*/}
      <h2 className="text-lg mb-2">{title}</h2>
      <h3 className='mb-2'>Product Brand : <span className='text-lg'>{brand.name}</span></h3>

      {/* Rating Stars */}
      <div className="flex items-center mb-2">
        <RatingsAverage ratingsAverage={ratingsAverage} className='color-yellow' />&nbsp; &nbsp;<span className='text-md'>{ratingsQuantity} (Customer review)</span>
      </div>

      {/* Product Price */}
      <div className='flex'>
        <p className='mr-3 text-lg'>Price :</p>
        {priceAfterDiscount ? (
          <p className='mr-3 line-through text-lg'>${priceAfterDiscount}</p>
        ) : null}
        <p className="text-lg font-semibold text-amazon_blue mb-2">
          ${price}
        </p>
      </div>

      {/* Product Quantity */}
      <p className="text-md text-gray-900 ">Avalabel Quantity: {quantity}</p>

      {/* Fulfilled by Amazon and Free Shipping */}
      <p className="text-sm text-gray-500 mb-2">Fulfilled by Amazon, Free Shipping</p>
    </div>
  );
};

export default SearchResultBox;
