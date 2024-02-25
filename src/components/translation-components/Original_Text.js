import React, { useContext } from "react";
import { Context } from "../../App";
import HOME_FLAGBOX from "../home-components/Home_FlagBox";

export default function ORIGINAL_TEXT() {
  const state = useContext(Context);
  const input = state.userInput;
  const updateInput = state.updateInput;

  return (
    <>
      <div className="col-12 home-input flex-column">
        <div className="row home-input-row mt-2 ">
          <div className="col-12 d-flex col-lg-offset-3 mb-2 home-title">
            <div className="col-2 offset-1  pr-5 flagbox-div">
              <HOME_FLAGBOX />
            </div>
            <div className="col-9 col-md-12 mr-0 home-text">Original Text</div>
          </div>
        </div>
        <div className="col-12 home-textarea-div">
          <div className="row d-flex justify-content-center  home-textarea-row">
            <div className="col-10 textarea-div mb-5 ">
              <textarea className="input-textarea" onChange={updateInput} value={input}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
