import React from "react";
import Banner from "../components/home/Banner/Banner";
import Products from "../components/home/Products";
import Boxes from "../components/home/Boxes/Boxes";
import Slides from "../components/slides/slides";

export default function Home(props) {
  return (
    <>
      <Banner />
      <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-20 lg:py-0">
        <Boxes />
        <Products />
      </div>
    </>
  );
}
