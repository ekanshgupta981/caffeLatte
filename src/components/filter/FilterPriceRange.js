import React from "react";

export default function FilterPriceRange({ filterData }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-3">
        <h3 className="text-muted">Choose price Range</h3>
        <ul className="filter-ul ms-5 mt-3 col-12">
          <li className="py-2">
            <input
              className="cursor-pointer"
              value="0-100"
              type="radio"
              id="0 to 100"
              name="price-range"
              onChange={(event) => filterData(event, "cost")}
            />
            <label
              className="ms-2 fs-5 cursor-pointer"
              htmlFor="0 to 100"
              name="price-range"
            >
              Below 100
            </label>
          </li>
          <li className="py-2">
            <input
              className="cursor-pointer"
              value="100-200"
              type="radio"
              id="100 to 200"
              name="price-range"
              onChange={(event) => filterData(event, "cost")}
            />
            <label
              className="ms-2 fs-5 cursor-pointer"
              htmlFor="100 to 200"
              name="price-range"
            >
              100 to 200
            </label>
          </li>
          <li className="py-2">
            <input
              className="cursor-pointer"
              value="200-300"
              type="radio"
              id="200 to 300"
              name="price-range"
              onChange={(event) => filterData(event, "cost")}
            />
            <label
              className="ms-2 fs-5 cursor-pointer"
              htmlFor="200 to 300"
              name="price-range"
            >
              200 to 300
            </label>
          </li>
          <li className="py-2">
            <input
              className="cursor-pointer"
              value="300-100000"
              type="radio"
              id="300 plus"
              name="price-range"
              onChange={(event) => filterData(event, "cost")}
            />
            <label
              className="ms-2 fs-5 cursor-pointer"
              htmlFor="300 plus"
              name="price-range"
            >
              Above 300
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
