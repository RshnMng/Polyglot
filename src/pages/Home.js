import React from "react";
import Home_FlagBox from "../components/home-components/Home_FlagBox";

export default function Home() {
  return (
    <>
      <div className="col-12 home-input">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-md-7 col-lg-offset-3 mb-2 home-title">
            <div className="row flag-box-title-row">
              <div className="col-2 offset-1  pr-5 flagbox-div">
                <Home_FlagBox />
              </div>
              <div className="col-9 mr-0 home-text">Text to Translate</div>
            </div>
          </div>
          <div className="col-12 col-md-7 home-textarea-div">
            <div className="row d-flex justify-content-center  home-textarea-row">
              <div className="col-10 textarea-div mb-5 ">
                <textarea className="main-textarea"></textarea>
              </div>
              <div className="col col-md-11 col-sm-10 mx-auto my-auto  mb-3 home-lang-select">
                <div className="row home-lang-select-row d-flex justify-content-around">
                  <div className="col-3 mx-2 p-0">
                    <div className="home-flag french-flag"></div>
                  </div>
                  <div className="col-3 mx-2 p-0">
                    <div className="home-flag spanish-flag "></div>
                  </div>
                  <div className="col-3 mx-2 p-0">
                    <div className="home-flag philippines-flag "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5  mb-auto home-buttons">
            <div className="row home-btn-row mb-3">
              <button className="home-btn col-10 col-lg-10 col-sm-6">Start A Chat</button>
              <button className="home-btn col-10 col-lg-10 col-sm-6">Translate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// style home flags using old styling and then give them the proper background image
// then style the select drop menu using  bootstrap
