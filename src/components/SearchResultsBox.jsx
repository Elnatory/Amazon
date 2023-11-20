import React from 'react';

const SearchResultBox = ({ result }) => {
  const { title, imageCover, price, quantity } = result;

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md">
      {/* Product Image */}
      {imageCover && <img src={imageCover} alt={title} className="w-full h-48 object-cover mb-4" />}

      {/* Product Title */}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {/* Rating Stars (Replace with your actual rating component) */}
      <div className="flex items-center mb-2">
        {/* Replace the stars with your actual rating component */}
        ⭐⭐⭐⭐⭐
      </div>

      {/* Product Price */}
      <p className="text-lg font-semibold text-amazon_blue mb-2">${price}</p>

      {/* Fulfilled by Amazon and Free Shipping */}
      <p className="text-sm text-gray-500 mb-2">Fulfilled by Amazon, Free Shipping</p>

      {/* Product Quantity */}
      <p className="text-sm text-gray-500">Quantity: {quantity}</p>
    </div>
  );
};

export default SearchResultBox;
