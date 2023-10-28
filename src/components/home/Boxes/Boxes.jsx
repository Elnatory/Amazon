import React from 'react'
import CarouselCategory from './CarousalCategory';
import CarouselProduct from './CarousalProduct';
import HomePageCard from './HomePageCard';
import {box1, box2, box3, box4} from "../../../assets/index.js"

export default function Boxes(props) {
    return (
        <>
            <div className="bg-amazonclone-background">
                <div className="min-w-[1000px] max-w-[1500px] m-auto">
                    <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
                        <HomePageCard
                            title={"Saving Bundles | Up to 30% off"}
                            img={box1}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Up to 50% off Home & Outdoors Tools"}
                            img={box2}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Get ready for Halloween | Up to 35% off"}
                            img={box3}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Kitchen essentials | Up to 15% off"}
                            img={box4}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Shop Pet Supplies"}
                            img={"../images/home_grid_5.jpg"}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Spring Sale"}
                            img={"../images/home_grid_6.jpg"}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Echo Buds"}
                            img={"../images/home_grid_7.jpg"}
                            link={"See more"}
                        />
                        <HomePageCard
                            title={"Family Plan: 3 months free"}
                            img={"../images/home_grid_8.jpg"}
                            link={"See more"}
                        />
                        <div className="m-3 pt-8">
                            <img
                                className="xl:hidden"
                                src={"../images/banner_image_2.jpg"}
                                alt="Banner 2"
                            />
                        </div>
                    </div>
                    <CarouselProduct />
                    <CarouselCategory />
                    <div className="h-[200px]">
                        <img
                            className="h-[100%] m-auto"
                            src={"../images/banner_image.jpg"}
                            alt="Banner 1"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
