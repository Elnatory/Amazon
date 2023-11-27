// Home.js
import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import FadeIn from '../../utils/fade';

const Banner = React.lazy(() => import("../../components/home/Banner/Banner"));
const Products = lazy(() => import("../../components/home/Products"));
const Boxes = lazy(() => import("../../components/home/Boxes/Boxes"));
const Slides = lazy(() => import("../../components/slides/slides"));

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const triggerRef = useRef(null);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(loaderTimeout);
  }, []);

  return showLoader ? <div className="loader"></div> : null;
};

const Home = () => {
  return (
    <>
      <React.Suspense fallback={<Loader />}>
          <Banner />
      </React.Suspense>
      <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-20 lg:py-0">
        <Suspense fallback={<Loader />}>
            <Boxes />
          <FadeIn>
            <Products />
          </FadeIn>
        </Suspense>
      </div>
    </>
  );
};

export default Home;