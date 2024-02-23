import React from "react";
import Home_FlagBox from "../components/home-components/Home_FlagBox";
import Home_Buttons from "../components/home-components/Home_Buttons";
import Home_Lang_Select from "../components/home-components/Home_Lang_Select";

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
              <Home_Lang_Select />
            </div>
          </div>
          <Home_Buttons />
        </div>
      </div>
    </>
  );
}
