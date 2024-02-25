import React from "react";
import Home_FlagBox from "../home-components/Home_FlagBox";

export default function TRANSLATION() {
  return (
    <>
      <div className="col-12 home-input flex-column">
        <div className="row home-input-row mt-2 ">
          <div className="col-12 d-flex col-lg-offset-3 mb-2 home-title">
            <div className="col-2 offset-1  pr-5 flagbox-div">
              <Home_FlagBox />
            </div>
            <div className="col-9 col-md-12 mr-0 home-text">Translation</div>
          </div>
        </div>
        <div className="col-12 home-textarea-div">
          <div className="row d-flex justify-content-center  home-textarea-row">
            <div className="col-10 textarea-div mb-5 ">
              <textarea className="translation-textarea"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
