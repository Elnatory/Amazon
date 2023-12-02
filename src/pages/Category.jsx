import { GETallProducts } from "../store/slices/allProducts";
import { authContext } from "../Contexts/isAuth";
import { useEffect, useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsData } from "../firebase/getProducts";
import { abdu } from '../assets/index'
import { abdu4 } from '../assets/index'
import Slides from "../components/slides/slides";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useLocation, useParams, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const ProductsByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [SubCategories, setSubCategories] = useState([]);
  const [newSubCategories, setnewSubCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(40);
  let allProducts = useSelector((state) => state.allProducts.allProducts);

  const { isLogin, setLogin, displayName } = useContext(authContext);
  const productsContainerRef = useRef();
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const { id } = useParams();

  useEffect(() => {
    getProductsData(setSubCategories, setLoading);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsData(setProducts, setLoading);
  }, []);
  useEffect(() => {
    dispatch(GETallProducts());
  }, []);

  useEffect(() => {
    if (currentProducts.length > 0) {
      const newFilteredProducts = currentProducts.filter(product =>
        product.category.slug.toLowerCase() === category.toLowerCase()
      );

      if (!arraysAreEqual(newFilteredProducts, filteredProducts)) {
        setFilteredProducts(newFilteredProducts);
      }
    }
  }, [category, currentProducts, filteredProducts]);

  useEffect(() => {
    if (SubCategories.length > 0) {
      const newSubCategories = SubCategories.filter(subcategory =>
        subcategory.category.slug.toLowerCase() === category.toLowerCase()
      );

      setnewSubCategories(newSubCategories);
    }
  }, [category, SubCategories]);

  function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      Categories
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      SubCategories
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      Products
    </Link>,
    <Typography key="3" color="inherit" style={{ fontSize: "0.8rem" }}>
      {category}
    </Typography>,
  ];

  if (loading) {
    return <p>Loading Firebase data...</p>;
  }

  return (
    <>
      <div
        className=" ml-8"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 12, color: "grey" }}>Sponsored </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="12"
            height="12"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
          </svg>
        </div>
      </div>

      <div ref={productsContainerRef}></div>

      <div className='container mt-0 categorycontainer '>
        <div className='row flex catbackground'>
        <div className='col-lg-2 p-4'>
  <p className='text-lg font-bold mb-2 fs-4'>Filter By Amazon</p>
  {newSubCategories?.map((subcategorie) => (
    <div key={subcategorie._id} className="">
      <div className='w-full column border-1 capitalize p-3 hover:text-orange-600'>
        {subcategorie.subcategory && subcategorie.subcategory.length > 0 && subcategorie.subcategory[0].name && (
          <Link
            to={`/subcategory/${subcategorie.subcategory[0].name.toLowerCase()}`}
            className='capitalize'
          >
            {subcategorie.subcategory[0].name}
          </Link>
        )}
        <hr className='mt-2' />
      </div>
    </div>
  ))}
</div>



          <div className='col col-lg-10 col-md-12'>
            <div className='conimg'>
              <p className='phcategory'>Enjoy FREE delivery, exclusive deals, <span className='text-black'>{category.toLocaleUpperCase()}</span> and more Join today. Cancel anytime.</p>
              <img className='mb-2' src={abdu} alt="" />
              <img src={abdu4} alt="" />
            </div>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 mt-4 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-4 px-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
                        shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
                  >
                    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                      {product.title.substring(0, 30)}
                    </span>
                    <div className="w-full h-auto flex items-center justify-center relative group rounded-md">
                      <div className="prd-img todayDeals_product_image">
                        <a
                          onClick={() => navigate(`/details/${product.id}`)}
                          className="img-lnk"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-52 h-64 object-contain transition-transform transform scale-100 group-hover:scale-110"
                            onMouseEnter={(e) =>
                              product.images[2] && (e.target.src = product.images[2])
                            }
                            onMouseLeave={(e) =>
                              product.images[2] && (e.target.src = product.images[0])
                            }
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
                      <div>
                        <p className="text-sm">
                          {product.description.substring(0, 100)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No products :(</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <div className="pagination m-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
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
