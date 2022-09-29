import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSlideLoader() {
  return (
    <>
      <SkeletonTheme baseColor="#ffe39f" highlightColor="#ffe0bd">
        <div className="d-flex align-items-center">
          <div>
            <Skeleton height={150} width={150} borderRadius={"3rem"} />
          </div>
          <div className="f-flex flex-column ms-2">
            <div className="d-flex align-items-baseline">
              <p className=" fw-bold pb-0 mb-0 ms-2 col-10 home-page-item-name">
                <Skeleton width={100} height={20} />
              </p>
            </div>
            <p className="text-success ms-4 fw-bold">
              <Skeleton width={50} />
            </p>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
