import React from "react";

export default function YourAccount() {
  return (
    <>
      <h1 className="w-75  mx-auto fw-bold fs-2 text-center mt-3 ">Help</h1>

      <div className="container py-5 yourAccount ">
        <div className="row gy-4 w-75 mx-auto">
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image   ">
                  <img
                    className="w-100 accountImg  "
                    alt="Your Orders"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/order._CB657847415_.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium ">Your Orders</h2>
                  <span className="text-muted fs-sm">
                    Track, return, or buy things again
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image w-50   ">
                  <img
                    className="w-100 accountImg  "
                    alt="Login &amp; security"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/return.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Returns & Refunds</h2>
                  <span className="text-muted fs-sm ">
                    Return or exchange items Print return mailing lables{" "}
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image  w-50  ">
                  <img
                    className="w-100 accountImg  "
                    alt="Prime"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/contact_us.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Contact Us </h2>
                  <span className="text-muted fs-sm">
                    {" "}
                    Return or exchange items Print return mailing lables
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image  w-50  ">
                  <img
                    className="w-100 accountImg  "
                    alt="Your prime"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/prime/Prime_clear-bg-t3.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Prime</h2>
                  <span className="text-muted fs-sm">
                    View benefits and payment settings
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image  w-50  ">
                  <img
                    className="w-100 accountImg  "
                    alt=""
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/payment.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Payment Settings</h2>
                  <span className="text-muted fs-sm">
                    Add or edit payment methods{" "}
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image  w-50  ">
                  <img
                    className="w-100 accountImg mix-blend-darken  "
                    alt="Prime"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/covid19.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Amazone and Covid-19</h2>
                  <span className="text-muted fs-sm">
                    {" "}
                    Impacts on orders and deliveries
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/login" className="ya-card__whole-card-link">
              <div className="account border d-flex justify-center align-items-center gap-2  shadow-sm p-4  rounded-2 bg-transparent  ">
                <div className="image w-50  ">
                  <img
                    className="w-100 accountImg  "
                    alt="Your Orders"
                    src="https://m.media-amazon.com/images/G/42/x-locale/cs/help/images/gateway/self-service/account.png"
                  />
                </div>

                <div className="info  ">
                  <h2 className=" fw-medium "> Account Setting</h2>
                  <span className="text-muted fs-sm">
                    Change email or password Update login information
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
           
      </div>
    </>
  );
}
