import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ShopLoader() {
  return (
    <>
      <section className="pt-5">
        <div className="container-fluid">
          <div className="px-lg-5">
            <div className="row">
              {/* ====> food Items <======== */}
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm border">
                  <div className="">
                    <Skeleton height={250} />
                  </div>
                  <div className="p-4 bg-light card-details">
                    <div className="pb-2">
                      <Skeleton height={30} width={200} />
                    </div>
                    <Skeleton count={4} width={250} />
                    <div className="mt-2">
                      <Skeleton height={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm border">
                  <div className="">
                    <Skeleton height={250} />
                  </div>
                  <div className="p-4 bg-light card-details">
                    <div className="pb-2">
                      <Skeleton height={30} width={200} />
                    </div>
                    <Skeleton count={4} width={250} />
                    <div className="mt-2">
                      <Skeleton height={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm border">
                  <div className="">
                    <Skeleton height={250} />
                  </div>
                  <div className="p-4 bg-light card-details">
                    <div className="pb-2">
                      <Skeleton height={30} width={200} />
                    </div>
                    <Skeleton count={4} width={250} />
                    <div className="mt-2">
                      <Skeleton height={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm border">
                  <div className="">
                    <Skeleton height={250} />
                  </div>
                  <div className="p-4 bg-light card-details">
                    <div className="pb-2">
                      <Skeleton height={30} width={200} />
                    </div>
                    <Skeleton count={4} width={250} />
                    <div className="mt-2">
                      <Skeleton height={30} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm border">
                  <div className="">
                    <Skeleton height={250} />
                  </div>
                  <div className="p-4 bg-light card-details">
                    <div className="pb-2">
                      <Skeleton height={30} width={200} />
                    </div>
                    <Skeleton count={4} width={250} />
                    <div className="mt-2">
                      <Skeleton height={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
