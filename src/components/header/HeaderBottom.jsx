import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import SideNavContent from "./SideHeader";
import { bottomHeader, bottomHeader2 } from "../../assets";
import Slider from "react-slick";

export default function HeaderBottom(props) {
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
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <>
            <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
                {/* ======================= List Items Start here ======================== */}
                <div className="flex items-center gap-2 text-sm tracking-wide flex-grow">
                    <ul className="flex items-center gap-2 text-sm tracking-wide">
                        <li
                            onClick={() => setSidebar(true)}
                            className="flex items-center gap-1 headerHover"
                        >
                            <MenuIcon />
                            All
                        </li>
                        <li className="hidden md:inline-flex headerHover">Today's Deals</li>
                        <li className="hidden md:inline-flex headerHover">Prime</li>
                        <li className="hidden md:inline-flex headerHover">Mobiles</li>
                        <li className="hidden md:inline-flex headerHover">Electronics</li>
                        <li className="hidden md:inline-flex headerHover">Music</li>
                        <li className="hidden md:inline-flex headerHover">Fashion</li>
                        <li className="hidden md:inline-flex headerHover">Home</li>
                        <li className="hidden md:inline-flex headerHover">Super Market</li>
                        <li className="hidden md:inline-flex headerHover">Books</li>
                    </ul>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Slider {...settings}>
                        <div>
                            <img className="headerHover" src={bottomHeader} alt="" width="350" />
                        </div>
                        <div>
                            <img className="headerHover" src={bottomHeader2} alt="" width="350" />
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
                                <div className="w-[350px] h-full bg-white border border-black" style={{ borderBottom: "none" }}>
                                    <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                        <AccountCircleIcon />
                                        <h3 className="font-titleFont font-bold text-lg tracking-wide">
                                            Hello, Sign In
                                        </h3>
                                    </div>
                                    {/* ============================ Content & Devices Start here ================ */}
                                    <SideNavContent
                                        title="Trendings"
                                        one="Best Sellers"
                                        two="New Releases"
                                        three="Movers & Shakers"
                                    />
                                    <SideNavContent
                                        title="Digital Content & Devices"
                                        one="Amazon Music"
                                        two="Kindle E-readers & Books"
                                        three="Amazon Appstore"
                                    />
                                    <SideNavContent
                                        title="Shop By Category"
                                        one="Electronics"
                                        two="Computers"
                                        three="Smart Home"
                                    />
                                    <SideNavContent
                                        title="Programs & Features"
                                        one="Gift Cards"
                                        two="Amazon live"
                                        three="International Shopping"
                                    />
                                    <SideNavContent
                                        title="Help & Settings"
                                        one="Your Account"
                                        two="Customer Service"
                                        three="Contact us"
                                    />
                                    {/* ============================ Content & Devices End here ================ */}
                                    <span
                                        onClick={() => setSidebar(false)}
                                        className="cursor-pointer absolute top-2 left-[300px] md:left-[360px] w-10 h-10 text-white flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                                    >
                                        <CloseIcon style={{ fontSize: '30px' }} />
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}
