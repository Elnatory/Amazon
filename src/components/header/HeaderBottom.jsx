import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideHeader";
import { bottomHeader, bottomHeader2, sadd } from "../../assets";
import Slider from "react-slick";
import { useContext } from "react";
import { authContext } from "../../Contexts/isAuth";
import { Localization } from "../../constants/localization";
import { languageContext } from "../../Contexts/language";
// import { authContext } from "../../Contexts/isAuth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HeaderBottom(props) {
  const displayName = localStorage.getItem("displayName");
  const { isLogin } = useContext(authContext);
  const { language } = useContext(languageContext);

  // const {displayName }= useContext(authContext)

  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };

  return (
    <>
      <div className="w-full px-3 h-[36px] bg-amazon_light text-white flex items-center">
        {/* ======================= List Items Start here ======================== */}
        <div className="flex items-center gap-2 text-sm tracking-wide flex-grow ">
          <ul className="flex items-center gap-2 text-sm tracking-wide ">
            <li
              onClick={() => setSidebar(true)}
              className="flex items-center gap-1 headerHover"
            >
              <MenuIcon />
              {language === "en"
                ? Localization.header.all.en
                : Localization.header.all.ar}
              {/* All */}
            </li>
            <div className="hederul d-flex">
              <li className="hidden md:inline-flex headerHover">
                <Link to="/">
                  {language === "en"
                    ? Localization.header.home.en
                    : Localization.header.home.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/todaysdeals">
                  {language === "en"
                    ? Localization.header.todaysDeals.en
                    : Localization.header.todaysDeals.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                {" "}
                <Link to="/catgory/mobiles">
                  {language === "en"
                    ? Localization.header.mobile.en
                    : Localization.header.mobile.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/catgory/electronics">
                  {language === "en"
                    ? Localization.header.electronics.en
                    : Localization.header.electronics.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/catgory/music">
                  {language === "en"
                    ? Localization.header.music.en
                    : Localization.header.music.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                {" "}
                <Link to="/catgory/books">
                  {language === "en"
                    ? Localization.header.books.en
                    : Localization.header.books.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                {language === "en"
                  ? Localization.header.superMarket.en
                  : Localization.header.superMarket.ar}
              </li>
              <li className="hidden md:inline-flex headerHover">
                {language === "en"
                  ? Localization.header.prime.en
                  : Localization.header.prime.ar}
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/catgory/men's-fashion">
                  {language === "en"
                    ? Localization.header.fashion.en
                    : Localization.header.fashion.ar}
                </Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/catgory/women's-fashion">Women's Fashion</Link>
              </li>
              <li className="hidden md:inline-flex headerHover">
                <Link to="/brands">Brands</Link>
              </li>
            </div>
          </ul>
        </div>
        <div
          className="omg"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Slider {...settings}>
            <div>
              <img
                className="headerHover"
                src={bottomHeader}
                alt=""
                width="350"
              />
            </div>
            <div>
              <img
                className="headerHover"
                src={bottomHeader2}
                alt=""
                width="350"
              />
            </div>
            <div>
              <img className="headerHover" src={sadd} alt="" width="350" />
            </div>
          </Slider>
        </div>
        {/* ======================= List Items End here ========================== */}
        {/* ======================= SideBar Start here =========================== */}
        {sidebar && (
          <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-70">
            <div className="w-full h-full relative">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[290px] md:w-[350px] h-full bg-white border border-black"
                style={{ overflowY: "auto", overflowX: "hidden" }}
              >
                <div
                  className="w-[350px] h-full bg-white border border-black"
                  style={{ borderBottom: "none" }}
                >
                  {isLogin ? (
                    <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                      <AccountCircleIcon />
                      <h3 className="font-titleFont font-bold text-lg tracking-wide">
                        Hello,{displayName}
                        {/* {displayName} */}
                      </h3>
                    </div>
                  ) : (
                    <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                      <AccountCircleIcon />
                      <h3 className="font-titleFont font-bold text-lg tracking-wide">
                        Hello,sigin
                        {/* {displayName} */}
                      </h3>
                    </div>
                  )}
                  {/* ============================ Content & Devices Start here ================ */}
                  <SideNavContent
                    title="Trendings"
                    one={<Link to="/bestsellers"> Best Sellers</Link>}
                    two={<Link to="/newreleases"> New Releases</Link>}
                    three={
                      <Link to="/Movers & Shakers"> Movers & Shakers</Link>
                    }
                  />
                  <SideNavContent
                    title="Digital Content & Devices"
                    one={<Link to="/catgory/music">Amazon Music</Link>}
                    two={
                      <Link to="/catgory/books">Kindle E-readers & Books</Link>
                    }
                    three={<Link to="/brands">Amazon Brands</Link>}
                  />
                  <SideNavContent
                    title="Shop By Category"
                    one={<Link to="/catgory/electronics">Electronics</Link>}
                    two={<Link to="/catgory/mobiles">Mobile</Link>}
                    three={
                      <Link to="/catgory/men's-fashion">Men's Fashion</Link>
                    }
                  />
                  <SideNavContent
                    title="Programs & Features"
                    one="Gift Cards"
                    two="Amazon live"
                    three="International Shopping"
                  />

                  <SideNavContent
                    title="Help & Settings"
                    one={<Link to="/account">Your Account</Link>}
                    two={<Link to="/help">Help</Link>}
                    three={<Link to="/about">About Us</Link>}
                  />
                  {/* ============================ Content & Devices End here ================ */}
                  <span
                    onClick={() => setSidebar(false)}
                    className="cursor-pointer absolute top-2 left-[300px] md:left-[360px] w-10 h-10 text-white flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                  >
                    <CloseIcon style={{ fontSize: "30px" }} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
