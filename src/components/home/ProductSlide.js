import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function ProductSlide({ isLoading, productsDetails }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        className="carousel position-absolute"
        removeArrowOnDeviceType="mobile"
      >
        {productsDetails.map((item, index) => {
          return (
            <div className="d-flex align-items-center" key={index}>
              {isLoading ? (
                <Link to={`/product-details/${item._id}`}>
                  <img
                    src={`../images/${item.path}`}
                    className="home-page-images img-fluid"
                    alt=""
                  />
                </Link>
              ) : (
                <div className="mt-lg-4">
                  <Skeleton height={100} width={100} />
                </div>
              )}
              {isLoading ? (
                <div className="f-flex flex-column ms-2">
                  <div className="d-flex align-items-baseline">
                    {item.hallmark === "veg" ? (
                      <abbr title="100% veg">
                        <img
                          src="../images/assets/veg.png"
                          alt=""
                          className="veg-non-veg-logo"
                        />
                      </abbr>
                    ) : (
                      <abbr title="Non-veg">
                        <img
                          src="../images/assets/non-veg.png"
                          alt=""
                          className="veg-non-veg-logo"
                        />
                      </abbr>
                    )}
                    <p className=" fw-bold pb-0 mb-0 ms-2 col-10 home-page-item-name">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-success ms-4 fw-bold">₹{item.price}</p>
                </div>
              ) : (
                <>
                  <div className="ms-3 mx-2 mt-lg-4">
                    <Skeleton width={100} />
                    <Skeleton width={50} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
