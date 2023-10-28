import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, createSearchParams } from "react-router-dom";
import React from "react";
import { deal1,deal2,deal3,deal4,deal5,deal6,deal7 } from "../../../assets";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
    const navigate = useNavigate();
    const searchCategory = (category) => {
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${category}`,
                searchTerm: ``,
            })}`,
        });
    };

    return (
        <div className="bg-white m-3">
            <div className="text-2xl font-semibold p-3">Best Sellers</div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
            >
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal1} alt="Deal category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal2} alt="Amazon category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal4} alt="Fashion category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal5} alt="Computers category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal6} alt="Home category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal3} alt="Mobiles category" />
                </SwiperSlide>
                <SwiperSlide
                    className="cursor-pointer"
                >
                    <img src={deal7} alt="Mobiles category" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselCategory;
