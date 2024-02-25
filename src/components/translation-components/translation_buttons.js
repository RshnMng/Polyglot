import React from "react";
import { Link } from "react-router-dom";
export default function Translation_Buttons() {
  return (
    <>
      <div className="col-12  mb-auto mt-5 translation-buttons">
        <div className="row home-btn-row mb-3">
          <Link to="/chat" className="home-btn col-10 col-lg-10 col-xs-6">
            Start A Chat
          </Link>
          <Link to="/translation" className="home-btn col-10 col-lg-10 col-xs-6">
            Translate
          </Link>
          <Link to="/" className="home-btn col-10 col-lg-10 col-xs-6">
            Go Home
          </Link>
          <button to="/translation" className="home-btn col-10 col-lg-10 col-xs-6">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
