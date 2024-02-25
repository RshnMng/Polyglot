import React, { useContext } from "react";
import HOME_FLAGBOX from "../components/home-components/Home_FlagBox";
import HOME_BUTTONS from "../components/home-components/Home_Buttons";
import HOME_LANG_SELECT from "../components/home-components/Home_Lang_Select";
import { Context } from "../App";

export default function Home() {
  let state = useContext(Context);
  let updateInput = state.updateInput;

  return (
    <>
      <div className="col-12 home-input flex-column">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-md-9 col-lg-offset-3 mb-2 home-title d-flex">
            <div className="col-2 offset-1  pr-5 flagbox-div">
              <HOME_FLAGBOX />
            </div>
            <div className="col-9 mr-0 home-text">Text to Translate</div>
          </div>
          <div className="col-12 col-md-7 home-textarea-div">
            <div className="row d-flex justify-content-center  home-textarea-row">
              <div className="col-10 textarea-div mb-5 ">
                <textarea className="main-textarea" onChange={updateInput}></textarea>
              </div>
              <HOME_LANG_SELECT />
            </div>
          </div>
          <HOME_BUTTONS />
        </div>
      </div>
    </>
  );
}
