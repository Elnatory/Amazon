import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { GETallProducts } from "../../store/slices/allProducts";
import Card from "../../components/card/card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { right, left } from "../../assets/index";
import { getCategoriesData } from "../../firebase/getCategory";
import { getBrandsData } from "../../firebase/getBrands";
import { adds } from "../../assets/index";
import FadeIn from "../../utils/fade.jsx";
import "./slides.css";

import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';
export default function Slides(props) {
  // const [prd, setPrd] = useState();
  let allProducts = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GETallProducts());
  }, []);

  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const swiperBreakPoints2 = {
    0: {
      slidesPerView: 2,
      speed: 400,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      speed: 500,
      slidesPerGroup: 3,
    },
  };

  const pagination1 = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span className="${className}"></span>`;
    },
  };

  const [swiperRef, setSwiperRef] = useState(null);

  function handleSwiperNav(num) {
    return {
      nextEl: `.swiper${num}-btn-next`,
      prevEl: `.swiper${num}-btn-prev`,
      disabledClass: `.swiper${num}-button-disabled`,
    };
  }
  const swiperBreakPoints = {
    0: {
      slidesPerView: 1,
      speed: 400,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 4,
      speed: 500,
      slidesPerGroup: 3,
    },
  };

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCategoriesData(setCategories, setLoading);
    getBrandsData(setBrands, setLoading);
  }, []);


  const navigate = useNavigate();

  const searchCategory = (brandName) => {
    // Navigate to 'brandsdetails' with brand name as a parameter
    navigate(`/brandsdetails/${brandName}`);
  };



  const searchCategory2 = (categoryName) => {
    // Navigate to 'brandsdetails' with category name as a parameter
    navigate(`/catgory/${categoryName}`);
  };















  return (
    <>
      <FadeIn>
        <div className="today_deals_heading m-auto">
          <h1>Shop Today's Deals</h1>
          <p>
            <a href="#">See all deals</a>
          </p>
        </div>
        <div className="bg-amazonclone-background">
          <div className="z-30 m-3">
            <Swiper
              className="swiper swiper2"
              modules={[Virtual, Navigation, Pagination]}
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={3}
              pagination={pagination1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              virtual
              initialSlide={5}
              breakpoints={swiperBreakPoints2}
              renderVirtualSlides={(swiper) => {
                return allProducts.map((prd, index) => (
                  <SwiperSlide
                    key={`virtual-slide-${index}`}
                    virtualIndex={index}
                  >
                    <Card prd={prd} />
                  </SwiperSlide>
                ));
              }}
            >
              {allProducts.map((prd) => (
                <SwiperSlide key={prd.id}>
                  <Card prd={prd} />
                </SwiperSlide>
              ))}
              <div className="custom-next" onClick={() => toggleActive(this)}>
                <img className="to" src={right} alt="" />
              </div>
              <div className="custom-prev" onClick={() => toggleActive(this)}>
                <img className="to" src={left} alt="" />
              </div>
            </Swiper>

            {/* {allProducts.length > 0 && (
              <div className="experience-component product-list my-5">
                <button className="swiper1-btn-next swiper-btn-next" />
                <button className="swiper1-btn-prev swiper-btn-prev" />
                <h3 className=" pe-2 mt-5 mb-4">
                  Inspired by your browsing history
                </h3>

                <Swiper
                  className="swiper swiper1"
                  spaceBetween={10}
                  navigation={handleSwiperNav(1)}
                  pagination={pagination1}
                  breakpoints={swiperBreakPoints}
                >
                  {allProducts.map((prd) => (
                    <SwiperSlide>
                      <Card prd={prd} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )} */}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="today_deals_heading  m-auto">
          <h1>Shop by Category</h1>
          <p>
            <a href="/categories">See all Categories</a>
          </p>
        </div>
        <div className="bg-white m-3">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            pagination={pagination1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
          >
             {categories.map((category, index) => (
        <SwiperSlide
          key={index}
          onClick={() => searchCategory2(category.slug)}
          className="cursor-pointer"
        >
          <img
            id="imgCat"
            src={category.image}
            alt={`${category.name} category`}
          />
        </SwiperSlide>
            ))}
            <div className="custom-next" onClick={() => toggleActive(this)}>
              <img className="to" src={right} alt="" />
            </div>
            <div className="custom-prev" onClick={() => toggleActive(this)}>
              <img className="to" src={left} alt="" />
            </div>
          </Swiper>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="today_deals_heading  m-auto">
          <h1>Shop by Brands</h1>
          <p>
            <a href="/brands">See all Brands</a>
          </p>
        </div>
        <div className="bg-white m-3">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            pagination={pagination1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
          >
               {brands.map((brand, index) => (
        <SwiperSlide
          key={index}
          onClick={() => searchCategory(brand.name)}
          className="cursor-pointer"
        >
          <img id="imgCat" src={brand.image} alt={`${brand.name} category`} />
        </SwiperSlide>
            ))}
            <div className="custom-next" onClick={() => toggleActive(this)}>
              <img className="to" src={right} alt="" />
            </div>
            <div className="custom-prev" onClick={() => toggleActive(this)}>
              <img className="to" src={left} alt="" />
            </div>
          </Swiper>
        </div>
      </FadeIn>
    </>
  );
}
