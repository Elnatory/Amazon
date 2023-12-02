import React, { useEffect, useState } from 'react';
import { getProductsData } from '../firebase/getProducts';
import { getSubCategories } from '../firebase/getSubCategory';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {abdu6} from '../assets/index'
import {abdu} from '../assets/index'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [SubCategories, setSubCategories] = useState([]);
    const [newSubCategories, setnewSubCategories] = useState([]);

    const { slug } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        const subscribe = getSubCategories(setProducts, setLoading);
        return () => subscribe();
      };
    
      fetchData();
    }, []);
    
    useEffect(() => {
      console.log('Category:', slug);
    
      if (products.length > 0) {
        const newSubCategories = products.filter(subcategory => subcategory.slug === slug);
        // console.log('New Subcategories:', newSubCategories);
    
        setnewSubCategories(newSubCategories);
      }
    }, [slug, products]);
    
      if (loading) {
        return <p>Loading Firebase data...</p>;
      }
    
    
    return (
        <>


 
  <div className="container">
<div className="row ">

    <div className="col-lg-2 border-4 p-4">

<div className="fs-4 text-warning">   Any Department </div>

 {SubCategories?.map((subcategories) =>
  
  
   <div key={subcategories._id} className="col-lg-4 text-start col-xs-12 col-sm-6 col-md-6 col-md-5">
   <div className=" p-2">

   <Link to={`/viewsubcategory/${subcategories.name}`} className='fs-5'>
              {subcategories.name}
            </Link> 
              </div>

 </div>
  
  
   ) }
 </div>








 <div className='col col-lg-9 col-md-12'>



<div className=''> 
     <h1 className='fs-2 fw-bold mb-2'>  {slug.toLocaleUpperCase()} </h1>
     <hr />

          <p className='phcategory2'>Enjoy FREE delivery, exclusive deals, <span className='text-black'> {slug.toLocaleUpperCase()} </span> and more Join today. Cancel anytime.</p>
          <img className="mb-2" src={abdu} alt="" />
          <img className="mb-2"  src={abdu6} alt="" />

    </div>  


  <div className=" col-lg-9 mx-auto mt-4  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 p-4  ">
  {newSubCategories.map((product) => (
                
 
                <div
                className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
                          shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
              >
                <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                 {product.title}  
                </span>
                {/* ========== Product Image Start here ============== */}
                <div className="w-full h-auto flex items-center justify-center relative group rounded-md"
                >
                <div className="prd-img todayDeals_product_image">
                  <a
                  onClick={() => navigate(`/details/${product.id}`)}
                  className="img-lnk"
                  >
                  <img
                    src={ product.image}
                    alt={product.title}
                    className="w-52 h-64 object-contain transition-transform transform scale-100 group-hover:scale-110"
                    onMouseEnter={(e) =>
                      product.images[2] && (e.target.src = product.images[2])
                    }
                    onMouseLeave={(e) =>
                      product.images[2] && (e.target.src = product.images[0])
                    }
                  />
                  </a></div>
                  {/* <a
                  onClick={() => navigate(`/details/${prd.id}`)}
                  className="img-lnk"
                >
                  <img src={ximg || prd.images[0]} className="w-100 img" />
                </a> */}
                  {/* ================== Product mini drop down Start here ============ */}
                </div>
  
                {/* ========== Product Image End here ================================ */}
                {/* ========== Product Info Start here =============================== */}
                <div className="px-4 bg-white flex flex-col gap-1 z-10">
                  <div className="flex items-center justify-between">
                    <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                      {product.title}
                    </h2>
                    <div className="product-price text-sm text-gray-600 font-semibold">
                      {product.priceAfterDiscount ? (
                        <>
                          <del className="prev-price">
                            <div content={product.price}>
                              {(product.price)}
                            </div>
                          </del>
                          <span className="curr-price" content={product.price}>
                            {(product.priceAfterDiscount)}
                          </span>
                        </>
                      ) : (
                        <span className="curr-price" content={product.price}>
                          {(product.price)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: "15px" }}
                    className="flex items-end justify-between"
                  >
                    <div>
                      <i
                        name="read-only"
                        value={product.ratingsAverage}
                        readOnly
                        style={{ fontSize: "20px" }}
                      />
                    </div>
                    <div className="text-center discount_Contaienr">
                      <span className="discount_Contaienr">
                        White Friday Deal
                      </span>
                    </div>
                  </div>
                  {/* <div className="text-yellow-500 flex">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div> */}
                  <div>
                    <p className="text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
  
                {/* {isLogin ? (
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          description: product.description,
                          price: product.price,
                          category: product.category,
                          image: product.imageCover,
                          quantity: 1,
                        })
                      )
                    }
                    className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link to="/Signin">
                    <button className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
                      Add To Cart
                    </button>
                  </Link>
                )} */}
  
                {/* <button className="w-full py-1.5 rounded-md font-titleFont font-medium text-base bg-gradient-to-tr from-orange-400 to-orange-200 border border-orange-500 hover:border-yellow-700 hover:from-orange-300 to hover:to-orange-400 active:bg-gradient-to-bl active:from-orange-400 active:to-orange-500 duration-200">
                Buy Now
              </button> */}
              </div>
            ))}
 
 
 </div>
 
            </div>
            </div>

         </div>

        </>
    );
};

export default Products;
