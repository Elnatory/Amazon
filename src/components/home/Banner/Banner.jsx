import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
    AmazonEg1,
    AmazonEg2,
    AmazonEg3,
    AmazonEg4,
    AmazonEg5,
    AmazonEg6,
    AmazonEg7,
    AmazonEg8,
    AmazonEg9,
    right,
    left,
} from "../../../assets/index";

const CustomPrevArrow = ({ onClick }) => (
    <div
        className="custom-arrow left"
        onClick={onClick}
    >
        <img src={left} alt="" />
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className="custom-arrow right"
        onClick={onClick}
    >
        <img src={right} alt="" />
    </div>
);

export default function Banner(props) {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <CustomPrevArrow onClick={onClickHandler} />
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <CustomNextArrow onClick={onClickHandler} />
                    )
                }

            >
                <div>
                    <img src={AmazonEg1} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg2} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg3} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg4} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg5} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg6} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg7} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg8} loading='lazy' />
                </div>
                <div>
                    <img src={AmazonEg9} loading='lazy' />
                </div>
                <div>
                    <img src={bannerImgOne} loading='lazy' />
                </div>
                <div>
                    <img src={bannerImgTwo} loading='lazy' />
                </div>
                <div>
                    <img src={bannerImgThree} loading='lazy' />
                </div>
                <div>
                    <img src={bannerImgFour} loading='lazy' />
                </div>
                <div>
                    <img src={bannerImgFive} loading='lazy' />
                </div>

            </Carousel>
        </div>
    );
}


