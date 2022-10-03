import React from "react";

export default function FilterCat({ filterData }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-3">
        <h3 className="text-muted">Choose Category</h3>
        <ul className="filter-ul d-lg-flex justify-content-lg-around mt-5 col-12">
          <li className="d-flex align-items-center">
            <input
              className="form-check-input cursor-pointer"
              value="drink"
              type="checkbox"
              id="drink"
              onChange={(event) => filterData(event, "categories")}
            />
            <label className="ms-2  fs-4 cursor-pointer" htmlFor="drink">
              Drinks
            </label>
          </li>
          <li className="d-flex align-items-center">
            <input
              className="form-check-input cursor-pointer"
              value="snacks"
              type="checkbox"
              id="Snacks"
              onChange={(event) => filterData(event, "categories")}
            />
            <label className="ms-2  fs-4 cursor-pointer" htmlFor="Snacks">
              Snacks
            </label>
          </li>
          <li className="d-flex align-items-center">
            <input
              className="form-check-input cursor-pointer"
              value="cake"
              type="checkbox"
              id="Cake"
              onChange={(event) => filterData(event, "categories")}
            />
            <label className="ms-2  fs-4 cursor-pointer" htmlFor="Cake">
              Cake
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
