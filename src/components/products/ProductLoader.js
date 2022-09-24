import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductLoader() {
  return (
    <>
      <section className="d-lg-flex overflow-hidden justify-content-center product-page">
        <div className=" col-lg-5 product-page-image-sec">
          <div className="d-flex justify-content-center product-image">
            <div className="mt-5">
              <Skeleton height={300} width={300} />
            </div>
          </div>
          <div className="d-flex justify-content-center position-sticky thumb-section">
            {/* ========> Thumb Images <============ */}
            <div className="mx-4">
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="mx-4">
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="mx-4">
              <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* ///// */}

        <div className="col-lg-5 d-flex d-lg-block flex-column mx-5 justify-content-center">
          <div className="pb-2 mt-5">
            <Skeleton height={30} width={200} />
          </div>
          <div className=" ">
            <Skeleton count={6} width={450} />
          </div>
        </div>
      </section>
    </>
  );
}
