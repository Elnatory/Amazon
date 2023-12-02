import React, { useEffect, useState } from 'react';
import { getBrandsData } from '../firebase/getBrands';
import { useParams, Link } from 'react-router-dom';
import { getProductsData } from '../firebase/getProducts';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBrandsData(setBrands, setLoading);

   
  }, []);



  if (loading) {
    return <h1>Loading Firebase data...</h1>;
  }

  return (
    <div className="max-w-screen-2xl mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
      {brands.length > 0 ? (
        brands.map((brand) => (
          <div key={brand.id} className="product shadow-sm p-3 rounded">
                    <Link to={`/brandsdetails/${brand.name.toLocaleLowerCase()}`}>
                                    <img src={brand.image} alt={brand.title} className="" />

                            </Link>


            <div className="bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-center">
                <h2 className="font-titleFont text-warning tracking-wide text-lg text-amazon_blue font-medium">

                  {brand.name}  

                </h2>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-center">
                <h2 className="font-titleFont text-center text-warning tracking-wide text-lg text-amazon_blue font-medium">
                  <p>Created At : {brand.createdAt.substring(0, 10)}</p>
                </h2>
              </div>
            </div>

            <div className="my-2 mt-4">
              <div className="d-flex justify-center">
                <p>Slug: {brand.slug}</p>
              </div>
              <div className="d-flex justify-center">
                <p>Updated At: {brand.updatedAt.substring(0, 10)}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No brands :(</h1>
      )}
   
    </div>
  );
};

export default Brands;
