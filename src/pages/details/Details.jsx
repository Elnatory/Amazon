import React, { useEffect, useState, useRef, useContext } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { prime1, prime2, primesvg } from "../../assets/index";
import ImageZoom from "react-image-zooom";
import ReactImageZoom from "react-image-zoom";
import Zoom from "react-medium-image-zoom";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase/getProducts";
import { addToCart } from "../../store/slices/amazonSlice";
import { GETallProducts } from "../../store/slices/allProducts";
import { collection, getDocs } from "firebase/firestore";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import "./Details.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { GoShare } from "react-icons/go";
import Slides from "../../components/slides/slides";
import { authContext } from "../../Contexts/isAuth";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { grey } from "@mui/material/colors";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Details(props) {
  const { id } = useParams();
  const { sim } = useParams();
  const [prd, setPrd] = useState();
  const [showMore, setShowMore] = useState(false);
  let allProducts = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLogin, setLogin } = useContext(authContext);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });

  useEffect(() => {
    if (allProducts.length) {
      const productById = allProducts.find((product) => product.id === id);

      if (productById) {
        setPrd(productById.similars?.[sim] || productById);
        scrollToTop();
        console.log("prd", productById.similars?.[sim] || productById);
      } else {
        console.error(`Product with id ${id} not found`);
      }
    } else {
      dispatch(GETallProducts());
    }
  }, [allProducts, location, id, sim]);

  const addTOCart = function () {
    setBounceAnime(!prd.quantity);
    setTimeout(() => setBounceAnime(false), 1000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  function handleSwiperNav(num) {
    return {
      nextEl: `.swiper${num}-btn-next`,
      prevEl: `.swiper${num}-btn-prev`,
      disabledClass: `.swiper${num}-button-disabled`,
    };
  }

  const [previewImage, setPreviewImage] = useState(prd?.images[0] || "");
  const handleImageHover = (image) => {
    setPreviewImage(image);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);
  function truncateDescription(description, limit) {
    if (description.length > limit) {
      return `${description.substring(0, limit)}...`;
    }
    return description;
  }

  async function handleGetDoc(coll) {
    const res = await getDocs(collection(db, coll));
    return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }

  const STORAGE_KEY = "selectedAlignment";
  const initialAlignment = localStorage.getItem(STORAGE_KEY) || "web";
  const [alignment, setAlignment] = React.useState(initialAlignment);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    localStorage.setItem(STORAGE_KEY, newAlignment);
    window.location.reload();
  };

  const colorNames = [
    "Black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Pink",
  ];

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      imageContainerRef.current.style.top = `${Math.min(scrollY, 300)}px`;
    };

    const imageContainer = document.querySelector(".image-container");
    imageContainerRef.current = imageContainer;

    if (imageContainer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("en-US", options);
  };

  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      Products
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      {allProducts.map((product) =>
        product.id === id ? product.category.name : ""
      )}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      style={{ fontSize: "0.8rem" }}
    >
      {allProducts.map((product) =>
        product.id === id ? product.brand.name : ""
      )}
    </Link>,
    <Typography key="3" color="inherit" style={{ fontSize: "0.8rem" }}>
      {allProducts.map((product) => (product.id === id ? product.title : ""))}
    </Typography>,
  ];

  const [discountEndTime, setDiscountEndTime] = useState(null);

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * (24 * 60 * 60 * 1000));
    const currentTime = new Date().getTime();
    const endTime = currentTime + randomTime;

    setDiscountEndTime(endTime);

    return () => {
      setDiscountEndTime(null);
    };
  }, []);

  const calculateTimeRemaining = () => {
    if (!discountEndTime) return "";

    const now = new Date().getTime();
    const timeRemaining = discountEndTime - now;

    const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutes = Math.floor(
      (timeRemaining % (60 * 60 * 1000)) / (60 * 1000)
    );
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <div
        className="  ml-8"
        style={{
          display: "flex ",
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

      <div className="main " role="main">
        {prd && (
          <>
            {/* ========================================================================================= First        */}

            <Grid
              spacing={{ xs: 4, md: 3 }}
              columns={{ xs: 7, sm: 7, md: 12 }}
              className=" contdetailes "
              container
            >
              <Grid item xs={1}>
                <div className="image-row  imgslide pe-2 image-container">
                  {prd.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product Image ${index}`}
                      style={{
                        maxWidth: "50px",
                        margin: "5px",
                        marginTop: "5px",
                        marginLeft: "30px",
                        borderRadius: "5px",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}
                      onMouseOver={() => handleImageHover(image)}
                    />
                  ))}
                </div>
              </Grid>

              <Grid item xs={4}>
                {/* <img
                  className="placeorder__image"
                  src={previewImage || prd.images[0]}
                /> */}
                {/* <div className="placeorder__image">
                  <ReactImageZoom
                    {...{
                      img: previewImage || (prd?.images && prd.images[0]),
                      zoomWidth: 400,
                      zoomStyle: "z-index: 1000;",
                    }}
                  />
                </div> */}
                <div className="placeorder__image image-container imagedetails image-container2">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Image",
                        src: previewImage || prd.images[0],
                        isFluidWidth: true,
                        zoomStyle: "z-index: 1000;",
                      },
                      largeImage: {
                        src: previewImage || prd.images[0],
                        width: 1200,
                        height: 1800,
                        zoomStyle: "z-index: 1000;",
                      },
                      enlargedImageContainerDimensions: {
                        width: "150%",
                        height: "100%",
                      },
                    }}
                  />
                  <div className="top-right-icon">
                    <GoShare />
                  </div>
                </div>
                {/* <Swiper className='placeorder__image swiper swiper1'
                                navigation={handleSwiperNav(1)}
                                breakpoints={swiperBreakPoints1}
                            >
                                {prdImages.map(image => <SwiperSlide className='imgslider placeorder__image'>{image}</SwiperSlide>)}
                            </Swiper> */}
              </Grid>
              {/* ========================================================================================= Second        */}

              <Grid item xs={4}>
                <div className="placeholder__description  detailssmall">
                  <div
                    style={{
                      fontSize: "24px",
                      lineHeight: "32px",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    {prd.title}{" "}
                  </div>
                  <div className="visit">Visit the {prd.brand.name} store</div>
                  <div style={{ fontSize: "15px" }}>
                    {prd.ratingsAverage}
                    <Rating
                      name="read-only"
                      value={prd.ratingsAverage}
                      readOnly
                      style={{ fontSize: "18px" }}
                    />
                    <span className="visit">
                      {" "}
                      {prd.ratingsQuantity} rating | 10 answered questions
                    </span>
                  </div>
                  <hr></hr>
                  <div>
                    <div className="textgap">
                      <span className="pricetag">
                        {prd.priceAfterDiscount > 0 ? (
                          <>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "grey",
                                fontWeight: "400",
                              }}
                            >
                              EGP {prd.price}.00
                            </span>{" "}
                            EGP {prd.priceAfterDiscount}.00
                          </>
                        ) : (
                          `EGP ${prd.price}.00`
                        )}
                      </span>
                    </div>
                    <div className="friday">White Friday Deal</div>
                    <div className="visit">FREE RETURN</div>
                    <p>All prices include VAT</p>
                    <div className="">
                      Buy with installments and pay EGP 203.71 for 60 months
                      with select banks.
                      <span className="visit" style={{ cursor: "pointer" }}>
                        {" "}
                        Learn more
                      </span>
                    </div>
                    <div className="">
                      FREE delivery: <strong>{getCurrentDate()}</strong>
                    </div>
                    <div className="">
                      EMI starts at EGP 50. No Cost EMI available
                    </div>
                    <div
                      style={{ color: "#007600", fontSize: "20px" }}
                      className=""
                    >
                      {prd.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </div>
                    <div className="qty">
                      <label className="fw-bold"> Availability : </label>
                      <span className="px-2 text-muted">
                        {prd.quantity
                          ? `only ${Math.floor(Math.random() * 6 + 1)} left`
                          : "Choose from Models :"}
                      </span>
                    </div>
                    <div className="">
                      Sold by <strong>{prd.brand.name}</strong> and Fulfilled by
                      Amazon.
                    </div>
                  </div>
                  <hr></hr>
                  <div>
                    <br></br>
                    <div>
                      <span className=" fw-bolder h6">
                        {`Colour : ${
                          allProducts[prd.index].images.length + 1
                        }  Available Colors :`}
                      </span>
                    </div>

                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      {prd.images.map((image, idx) => (
                        <ToggleButton
                          key={idx}
                          value={image}
                          className={
                            alignment === image ? "selected-toggle" : ""
                          }
                        >
                          <div>
                            <img
                              src={image}
                              alt={`Platform ${idx + 1}`}
                              style={{ width: "30px", height: "30px" }}
                            />
                            <div className="color__title">
                              {colorNames[idx] || "Color"}{" "}
                              {/* Use color name or fallback to 'Color' */}
                            </div>
                          </div>
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>

                    {Math.random() > 0.5 ? (
                      <div className="available-text">Available</div>
                    ) : (
                      <div className="not-available-text">Not Available</div>
                    )}

                    <div style={{ fontSize: "24px" }} className="">
                      About this item
                    </div>
                    {showFullDescription ? (
                      <div>
                        <ul>{prd.description}</ul>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                            margin: "0",
                          }}
                        >
                          <li>
                            6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD
                            display
                          </li>
                          <li>
                            Water and dust resistant (2 meters for up to 30
                            minutes, IP68)
                          </li>
                          <li>
                            Dual-camera system with 12MP Ultra Wide and Wide
                            cameras; Night mode, Portrait mode, and 4K video up
                            to 60fps
                          </li>
                          <li>
                            12MP TrueDepth front camera with Portrait mode, 4K
                            video, and Slo-Mo
                          </li>
                          <li>Face ID for secure authentication</li>
                          <li>
                            A13 Bionic chip with third-generation Neural Engine
                          </li>
                          <li>Fast-charge capable</li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <ul>{truncateDescription(prd.description, 100)}</ul>
                        {/* Adjust the character limit (100 in this example) */}
                      </div>
                    )}
                    <button
                      className="show_more_btn centerme"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      <i
                        className={`fa-solid fa-chevron-${
                          showFullDescription ? "up" : "down"
                        }`}
                      />
                      <span className="visit">
                        {showFullDescription ? "Show Less" : "Show More"}
                      </span>
                    </button>
                  </div>
                </div>
              </Grid>
              {/* ========================================================================================= Third        */}

              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={3}
                className="too"
              >
                <Paper variant="outlined" className="placeorder__order1">
                  <div style={{ backgroundColor: "#cccccc" }}>
                    <label
                      style={{
                        // background: "#eee",
                        fontSize: "16px",
                        width: "100%",
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "5px",
                          // background: "#eee",
                        }}
                      />
                      <strong>Yes, I want FREE Delivery </strong>
                    </label>
                  </div>
                </Paper>

                <Paper variant="outlined" className="placeorder__order">
                  <div>
                    <div>
                      <img src={prime2} alt="" />
                    </div>
                    <div>
                      <strong>Without Exchange</strong>
                    </div>
                    <div className="prd-price">
                      {prd.priceAfterDiscount ? (
                        <>
                          <del className="prev-price">
                            <span content={prd.price}>
                              {currency.format(prd.price)}
                            </span>
                          </del>
                          <span className="curr-price" content={prd.price}>
                            {currency.format(prd.priceAfterDiscount)}
                          </span>
                        </>
                      ) : (
                        <span className="curr-price" content={prd.price}>
                          {currency.format(prd.price)}
                        </span>
                      )}
                    </div>
                    <span id="ends">
                      this offer ends in : {calculateTimeRemaining()}
                    </span>
                    <div style={{ marginTop: "10px" }}>
                      <strong>Add an Accessory</strong>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"></input> Apple Airpods
                      </label>
                      <br></br>
                      <label>
                        <input type="checkbox"></input> Apple 20W USB Power
                        Adapter
                      </label>
                    </div>
                    <div>
                      {isLogin ? (
                        <button
                          className={`placeorder__button addtocart buttomcart ${
                            prd.quantity ? "animated" : ""
                          }`}
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: prd.id,
                                title: prd.title,
                                description: prd.description,
                                price: prd.price,
                                category: prd.category,
                                image: prd.imageCover,
                                quantity: 1,
                              })
                            )
                          }
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <Link to="/Signin">
                          <button
                            className={`placeorder__button addtocart ${
                              prd.quantity ? "animated" : ""
                            }`}
                          >
                            Add To Cart
                          </button>
                        </Link>
                      )}

                      <Link to="/checkout">
                        <button
                          className={`placeorder__button buynow buttomcart ${
                            prd.quantity ? "animated" : ""
                          }`}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </Paper>

                <Paper
                  variant="outlined"
                  className="placeorder__order paperdispay"
                >
                  <div>
                    <div>
                      <strong>With Shipping +50EGP</strong>
                    </div>
                    <div>EGP {prd.price + 50}.00</div>
                    <div>
                      <Link to="/">
                        <button
                          className={`placeorder__button back buttomcart ${
                            prd.quantity ? "animated" : ""
                          }`}
                        >
                          Back to shop
                        </button>
                      </Link>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <strong>Add a Protection Plan:</strong>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"></input> 1 Year Extended Warranty
                        Plan for EGP 688.00
                      </label>
                      <br></br>
                      <label>
                        <input type="checkbox"></input> 2 Year Extended Warranty
                        Plan for EGP 1,113.00
                      </label>
                    </div>

                    <div>
                      <img src={primesvg} alt="" />
                    </div>

                    <div>
                      <span className="visit">Add to List</span>
                      <span className="visit">Share</span>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            {/* ========================================================================================= Fourth        */}
            <Slides />
          </>
        )}
      </div>
    </>
  );
}
