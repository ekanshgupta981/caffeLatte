import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSlideLoader() {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="mt-lg-4">
          <Skeleton width={100} height={100} />
        </div>
        <div className="f-flex flex-column ms-2 mt-lg-4">
          <div className="">
            <p className=" fw-bold pb-0 mb-0 ms-2 col-10 home-page-item-name">
              <Skeleton width={100} />
            </p>
          </div>
          <p className="ms-2">
            <Skeleton width={50} />
          </p>
        </div>
      </div>
    </>
  );
}
