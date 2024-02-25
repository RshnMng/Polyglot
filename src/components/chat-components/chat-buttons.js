import React from "react";
import { Link } from "react-router-dom";

export default function CHAT_BUTTONS() {
  return (
    <>
      <div className="col-12  mb-auto mt-5 ml-3 chat-buttons">
        <div className="row home-btn-row mb-3">
          <Link to="/" className="home-btn col-10 col-lg-10 col-xs-6">
            Go Home
          </Link>
          <Link to="/translation" className="home-btn col-10 col-lg-10 col-xs-6">
            Go To Translator
          </Link>
          <button to="/translation" className="home-btn col-10 col-lg-10 col-xs-6">
            Clear Chat
          </button>
        </div>
      </div>
    </>
  );
}
