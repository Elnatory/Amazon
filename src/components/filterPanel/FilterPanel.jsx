import React, { useEffect, useState } from 'react'
import BrandsFilter from '../filters/BrandsFilter'
import CategoriesFilter from '../filters/CategoryFilter'
import { getSearchData } from '../../firebase/getSearchResults'
import { useLocation } from 'react-router-dom'
import { getBrandsData } from '../../firebase/getBrands'
import { getProductsData } from '../../firebase/getProducts'
import { getCategoriesData } from '../../firebase/getCategory'
import CustomerReview from '../filters/CustomerReview'

const FilterPanel = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]); 
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getSearchData(searchQuery, setSearchResults, setLoading);
  }, [searchQuery]);

  useEffect(() => {
    getBrandsData(setBrands, setLoading);
  }, []);
  useEffect(() => {
    getCategoriesData(setCategories, setLoading);
  }, [])
  useEffect(() => {
    setFilteredResults(searchResults);
  })

  // console.log('====================================');
  // console.log('brands',brands);
  // console.log('categories',categories);
  // console.log('filteredResults',filteredResults);


  return (
    <>
      <div className='w-full column p-3 mb-3'>
        <p className='text-lg font-bold'>FullFilled By Amazon</p>
        <input className='checkbox-lg' type="checkbox" id='fullfilledByAmazon' name='fullFilledByAmazon' />
        <label className='hover:text-orange-600 check-label ml-3' htmlFor="fullfilledByAmazon"> | Fullfilled By Amazon</label>
        <p className='text-lg font-bold mt-3'>Eligible for Free Shipping</p>
        <input className='checkbox-lg' type="checkbox" id='freeShipping' name='freeShipping' />
        <label className='hover:text-orange-600 check-label ml-3' htmlFor="freeShipping"> | Eligible for Free Shipping
          <p>
            All customers get FREE Shipping on orders shipped by Amazon
          </p>
        </label>
        <p className='text-lg font-bold mt-2'>Delivery Day</p>
        <input className='checkbox-lg' type="checkbox" id='deliveryDay' name='deliveryDay' />
        <label className='hover:text-orange-600 check-label ml-3' htmlFor="deliveryDay">Get it by Tomorrow</label>
      </div>
      <BrandsFilter brands={brands} products={filteredResults} />
      <CategoriesFilter categories={categories} products={filteredResults} />
      <CustomerReview products={filteredResults} setFilteredResults={setFilteredResults} />
    </>
  )
}

export default FilterPanel