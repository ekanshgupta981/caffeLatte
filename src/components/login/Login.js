import React from "react";
import { GoogleLogin } from "@react-oauth/google";
export default function Login({ success, error }) {
  return (
    <>
      <div
        className="modal fade "
        id="login"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content Login-image">
            <div className="modal-header">
              <h5 className="modal-title text-navy fw-bold" id="login-title">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-11 d-flex flex-column py-3">
                  <GoogleLogin
                    theme={"filled_black"}
                    shape={"circle"}
                    width={600}
                    onSuccess={(credentialResponse) => {
                      success(credentialResponse);
                    }}
                    onError={() => {
                      error("Login Failed");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center col-12">
                <p>
                  Don't have an account?
                  <a href="localhost:3000" className="text-danger ms-1 ">
                    SignUp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
