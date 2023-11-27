import React, { useEffect, useState, useContext, useRef } from "react";
import { getProductsData } from "../../firebase/getProducts";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../../store/slices/amazonSlice";
import { authContext } from "../../Contexts/isAuth";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { GETallProducts } from "../../store/slices/allProducts";


const Products = () => {
  const { isLogin, setLogin } = useContext(authContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });
  const navigate=useNavigate();
  const dispatch = useDispatch();
  let allProducts = useSelector((state) => state.allProducts.allProducts);
  useEffect(() => {
    getProductsData(setProducts, setLoading);
  }, []);
  useEffect(() => {
    dispatch(GETallProducts());
  }, []);

  const productsContainerRef = useRef();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <h1>Loading Firebase data...</h1>;
  }

  return (
    <>
    <div ref={productsContainerRef}></div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            
            <div
            key={uuidv4()}
              className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
                        shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
            >
              <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                <p>Category: {product.category.name}</p>
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
                            {currency.format(product.price)}
                          </div>
                        </del>
                        <span className="curr-price" content={product.price}>
                          {currency.format(product.priceAfterDiscount)}
                        </span>
                      </>
                    ) : (
                      <span className="curr-price" content={product.price}>
                        {currency.format(product.price)}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{ fontSize: "15px" }}
                  className="flex items-end justify-between"
                >
                  <div>
                    <Rating
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
          ))
        ) : (
          <h1>No products :(</h1>
        )}
      </div>
      <div className="pagination-container">
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

export default Products;
