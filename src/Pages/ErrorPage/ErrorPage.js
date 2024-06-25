import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section">
        <div className="row mb-4">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-center">
            <img
              src="https://png.pngtree.com/png-vector/20200313/ourmid/pngtree-error-page-not-found-concept-with-people-having-problems-with-website-png-image_2157909.jpg"
              alt="Error_Image"
            />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
        </div>

        <div style={{ margin: "3rem 0rem" }} className="text-center">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate(`/`)}
          >
            Back Employee List
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
