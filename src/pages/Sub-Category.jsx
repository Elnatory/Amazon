import { useParams, Link } from 'react-router-dom';
import { getProductsData } from '../firebase/getProducts.js'
import { getSubCategories } from '../firebase/getSubCategory.js';
// import { Card } from 'flowbite-react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState,useContext } from "react";
import { authContext } from "../Contexts/isAuth";
import { useNavigate } from "react-router-dom";
import { GETallProducts } from "../store/slices/allProducts";
import {abdu5} from '../assets/index'
import {abdu} from '../assets/index'
const ProductsByCategory = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [loadingSubCategories, setLoadingSubCategories] = useState(true);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(1000);
  let allProducts = useSelector((state) => state.allProducts.allProducts);

  const {isLogin,setLogin,displayName }= useContext(authContext)
  const productsContainerRef = useRef();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      const subscribe = getProductsData(setProducts, setLoadingProducts);
      return () => subscribe();
    };

    const fetchSubCategories = async () => {
      const subscribe = getSubCategories(setSubCategories, setLoadingSubCategories);
      return () => subscribe();
    };

    fetchProducts();
    fetchSubCategories();
  }, []);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsData(setProducts, setLoading);
  }, []);
  useEffect(() => {
    dispatch(GETallProducts());
  }, []);



  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };







  if (loadingProducts || loadingSubCategories) {
    return <p>Loading Firebase data...</p>;
  }


  const filteredProducts2 = currentProducts
    .filter(product => Array.isArray(product.subcategory))
    .filter(product => product.subcategory.some(sub => typeof sub.name === 'string' && sub.name.toLowerCase().includes(name.toLowerCase())));



  return (


    <>    
    <div ref={productsContainerRef}></div>


    <div className='container '>

          <div className='row flex  catbackground'>
    
    
            <div className="col-lg-2 mx-2">
    
    
    
              <div className="text-lg font-bold mt-3 mb-3">Any Department </div>
    
    
    
    
    
    
              {subCategories?.map((subcategorie) =>
    
    
                <div key={subcategorie._id} className="">
    
    
    
                  <div className='w-full column p-3 border-1 capitalize hover:text-orange-600 mb-3'>
                    <Link to={`/viewsubcategory/${subcategorie.slug}`} className=''>
                      {subcategorie.name}
                    </Link>
                    <hr className="mt-2" />
                  </div>
                </div>
              )}
            </div>
    
    

            <div className='col col-lg-9 col-md-12'>



<div className=''> 
     <h1 className='fs-2 fw-bold mb-2'>  {name.toLocaleUpperCase()} </h1>
     <hr />

          <p className='phcategory2'>Enjoy FREE delivery, exclusive deals, <span className='text-black'> {name.toLocaleUpperCase()} </span> and more Join today. Cancel anytime.</p>
          <img className="mb-2" src={abdu} alt="" />
          <img className="mb-2" width={1200} src={abdu5} alt="" />

    </div>  
    
            <div className="col-lg-10 mx-auto mt-4 h-20  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-7 p-4 ">

              {filteredProducts2.map(product => (
    
         
    <div
    className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
              shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
    >
    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
     {product.title.substring(0,30)}  
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
        src={ product.images[0]}
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
          {product.title.substring(0, 20)}
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
          {product.description.substring(0, 100)}
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          
    <div className="pagination-container ">
        <div className="pagination m-10">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            {"<"}Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next{">"}
          </button>
        </div>
      </div>
    
    
         </>






  );
};

export default ProductsByCategory;































