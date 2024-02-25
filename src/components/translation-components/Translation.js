import React, { useContext } from "react";
import Home_FlagBox from "../home-components/Home_FlagBox";
import { Context } from "../../App";

export default function TRANSLATION() {
  let state = useContext(Context);
  const output = state.translation;
  console.log(output);
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
              <textarea className="translation-textarea" readOnly value={output ? output : "Translating..."}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// make it so translate button is disabled on home screen doesnt if text area is empty and
// no language is selected // add information on click to tell user what to do
