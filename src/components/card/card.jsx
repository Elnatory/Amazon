import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import Slickslide from '../slickslide/slick';
import "./card.css";

const Card = ({ prd }) => {
  const [ximg, setXimg] = useState("");
  const [hoverON, setHoverON] = useState(false);
  const [discount, setDiscount] = useState(0);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });
  const navigate = useNavigate();

  const showSecondImg = () => {
    setXimg(prd.images[4]);
    setHoverON(true);
  };
  const hideSecondImg = () => {
    setXimg("");
    setHoverON(false);
  };
  useEffect(() => {
    const calculateDiscount = () => {
      const discountValue =
        ((prd.price - prd.priceAfterDiscount) / prd.price) * 100;
      const flooredDiscount = isNaN(discountValue)
        ? 0
        : Math.floor(discountValue);
      setDiscount(flooredDiscount);
    };

    calculateDiscount();
  }, [prd.price, prd.priceAfterDiscount]);

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
      <div className="box">
        <figure
          key={uuidv4()}
          style={{ width: 200, height: 500 }}
          className={hoverON ? "prd-card card-border" : "prd-card"}
          onMouseEnter={showSecondImg}
          onMouseLeave={hideSecondImg}
        >
          <picture>
            <div className="prd-img todayDeals_product_image">
              <a
                onClick={() => navigate(`/details/${prd.id}`)}
                className="img-lnk"
              >
                <img src={ximg || prd.images[0]} className="w-100 img" />
              </a>
            </div>
            <div className="pct-discount text-end discount_Contaienr">
              <span className="discount_Contaienr">Up to {discount}% off</span>
              
            </div>
          </picture>

          <figcaption className="prd-body">
            <div className="prd-name">
              <a href="">{prd.title}</a>
            </div>
            <span id="ends">ends in : {calculateTimeRemaining()}</span>
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
          </figcaption>
        </figure>
      </div>
    </>
  );
};
export default Card;
