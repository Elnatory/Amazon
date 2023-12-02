import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrand } from '../../store/slices/brandsSlice';
import { removeBrand } from '../../store/slices/brandsSlice';

const BrandsFilter = ({ brands, products }) => {
  const selectedBrands = useSelector((state) => state.brands); // Access selectedBrands from Redux store
  const dispatch = useDispatch();

  const [filteredResultsState, setFilteredResultsState] = useState([]);
  const [x, setX] = useState(5);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const filteredResults = products.filter((product) => {
      if (selectedBrands.length === 0) {
        return true; // Include all products if no brands are selected
      } else {
        // console.log('Selected Brands:', selectedBrands);
        return selectedBrands.includes(product.brand); // Filter products based on selected brands
      }
    });

    if (
      JSON.stringify(filteredResults) !==
      JSON.stringify(filteredResultsState)
    ) {
      setFilteredResultsState(filteredResults);
    }
  }, [selectedBrands, products]);

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      dispatch(removeBrand(brand));
    } else {
      dispatch(addBrand(brand));
    }
  };

  const changeX = () => {
    if (showMore) {
      setX(brands.length); // Increment x to the brands length
      setShowMore(false); // Set showMore to false
    } else {
      setX(5); // Decrement x back to 5
      setShowMore(true); // Set showMore to true
    }
  };

  return (
    <div className='p-4'>
      {/* Brands checkboxes */}
      <p className='text-lg font-bold'>Select Brands:</p>
      <div className='flex flex-col'>
        {brands.slice(0, x).map((brand) => (
          <div key={brand._id} className='mr-4 mb-2'>
            <input
              type='checkbox'
              id={brand._id}
              value={brand.name}
              // checked={selectedBrands.includes(brand.name)}
              onChange={() => handleBrandChange(brand.name)}
            />
            <label htmlFor={brand._id} className='ml-2'>
              {brand.name}
            </label>
          </div>
        ))}

        <div className='flex justify-start'>
          <button onClick={changeX} className='outline-none text-blue-400'>
            {showMore ? 'Show More...' : 'Show Less...'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandsFilter;
