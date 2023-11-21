import React, { useEffect, useState, useContext} from "react";
import { getProductsData } from "../../firebase/getProducts";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../../store/slices/amazonSlice";
import { useDispatch } from "react-redux";
import { authContext } from "../../Contexts/isAuth";
import { Link } from "react-router-dom";

const Products = () => {
  const { isLogin, setLogin } = useContext(authContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsData(setProducts, setLoading);
  }, []);

  if (loading) {
    return <h1>Loading Firebase data...</h1>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent 
                        shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              <p>Category: {product.category.name}</p>
            </span>
            {/* ========== Product Image Start here ============== */}
            <div className="w-full h-auto flex items-center justify-center relative group rounded-md">
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-52 h-64 object-contain transition-transform transform scale-100 group-hover:scale-110"
              />
              {/* ================== Product mini drop down Start here ============ */}
            </div>

            {/* ========== Product Image End here ================================ */}
            {/* ========== Product Info Start here =============================== */}
            <div className="px-4 bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {product.title.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  Price: ${product.price}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm p-3">
                {product.description.substring(0, 100)}
              </p>
              <div className="text-yellow-500 flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>

            {isLogin ? 
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product._id,
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
             : <Link to="/Signin">
              <button  className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">addtocart</button>
              </Link> }
            {/* <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product._id,
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
            </button> */}
            <button className="w-full py-1.5 rounded-md font-titleFont font-medium text-base bg-gradient-to-tr from-orange-400 to-orange-200 border border-orange-500 hover:border-yellow-700 hover:from-orange-300 to hover:to-orange-400 active:bg-gradient-to-bl active:from-orange-400 active:to-orange-500 duration-200">
              Buy Now
            </button>
          </div>
        ))
      ) : (
        <h1>No products :(</h1>
      )}
    </div>
  );
};

export default Products;
