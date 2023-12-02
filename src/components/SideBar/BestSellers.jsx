import { GETallProducts } from "../../store/slices/allProducts";
import { Link } from 'react-router-dom';
import { authContext } from "../../Contexts/isAuth";
import { useEffect, useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsData } from "../../firebase/getProducts";
import { getSubCategories } from '../../firebase/getSubCategory';
import {abdu3} from '../../assets/index'
import {abdu} from '../../assets/index'
import Slides from "../../components/slides/slides";
import Rating from "@mui/material/Rating";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(40);
  let allProducts = useSelector((state) => state.allProducts.allProducts);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const { isLogin, setLogin, displayName } = useContext(authContext)
  const productsContainerRef = useRef();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const [loadingSubCategories, setLoadingSubCategories] = useState(true);
  const [showAll, setShowAll] = useState(false);





















 const navigate = useNavigate();
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    getProductsData(setProducts, setLoading);
  
    const fetchSubCategories = async () => {
      const subscribe = getSubCategories(setSubCategories, setLoadingSubCategories);
      return () => subscribe();
    };
    
    fetchSubCategories();
  }, []);
  

useEffect(() => {
    dispatch(GETallProducts());
  }, []);




  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

























  if (loading) {
    return <p>Loading Firebase data...</p>;
  }



  return (


    <>
    <div ref={productsContainerRef}></div>



    <div className='container '>
      <div className='row flex catbackground'>
        <div className="col-lg-2  p-4">
          <div className="text-lg font-bold ">Any Department </div>
          {subCategories?.map((subcategorie) =>
            <div key={subcategorie._id} className="">
              <div className='w-full column p-3 hover:text-orange-600 mb-3'>
                <Link to={`/viewsubcategory/${subcategorie.slug}`} className=''>
                  {subcategorie.name}
                </Link>
                <hr className="mt-2" />
              </div>
            </div>
          )}
        </div>













        <div className='col col-lg-10 col-md-12'>



        <div className=''> 
             <h1 className='fs-2 fw-bold mb-2'>  Amazon Best Sellers </h1>
             <hr />

                  <p className='phcategory1'>Enjoy FREE delivery, exclusive deals, <span className='text-black'> Amazon Best Sellers</span> and more Join today. Cancel anytime.</p>
                  <img className="mb-2" src={abdu} alt="" />
                  <img className="mb-2" src={abdu3} alt="" />

            </div>  
            
                  <div className="col-lg-10 mx-auto  h-25 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-7 p-4 ">

          {currentProducts.map(product => (
         
         product.sold && product.sold !== 0 ? (



            <div key={product.id} className="bg-white  border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4">
              <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                {product.title.substring(0, 30)}
              </span>
              <div className="w-full h-auto flex items-center justify-center relative group rounded-md">
                <div className="prd-img todayDeals_product_image">
                
                         
                        
                  <a                        
                     onClick={() => navigate(`/details/${product.id}`)}
                      className="img-lnk">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-52 h-64 object-contain transition-transform transform scale-100 group-hover:scale-110"
                      onMouseEnter={(e) => product.images[2] && (e.target.src = product.images[2])}
                      onMouseLeave={(e) => product.images[2] && (e.target.src = product.images[0])}
                    />
                  </a>
                </div>
              </div>
              <div className="px-4 bg-white flex flex-col gap-1 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                    {product.title.substring(0, 20)}
                  </h2>
                  <div className="product-price text-sm text-gray-600 font-semibold">
                    {product.sold ? (
                      <>
                    
                        <span className="curr-price" content={product.sold}>
                          {(product.sold)}
                        </span>
                      </>
                    ) : (
                      <span className="curr-price" content={product.price}>
                        {(product.price)}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ fontSize: "15px" }} className="flex items-end justify-between">
                  <div>
                    <Rating name="read-only" value={product.ratingsAverage} readOnly style={{ fontSize: "20px" }} />
                  </div>
                  <div className="text-center discount_Contaienr">
                    <span className="discount_Contaienr">
                     Sold
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm">
                    {product.description.substring(0, 100)}
                  </p>
                </div>
              </div>
           
            </div>

) : null

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
  <Slides />

  </>
  );
};
















export default ProductsByCategory;
