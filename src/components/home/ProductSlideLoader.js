import React from "react";

export default function ProductSlideLoader() {
  return (
    <>
      <div className="d-flex align-items-center">
        <div class="spinner-border text-dark fs-4 mt-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
