import React from "react";
import Input from "../components/Input";
import LanguageSelect from "../components/LanguageSelect";
import HomeButtons from "../components/HomeButtons";

export default function Home() {
  return (
    <>
      <div className="col-12 home-input">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-md-7 col-lg-offset-3 mb-2 home-title">Text to Translate</div>
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
              <button class="home-btn col-10 col-lg-11 ">Translate</button>
              <button class="home-btn col-10 col-lg-11 ">Start A Chat</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// style home flags using old styling and then give them the proper background image
// then style the select drop menu using  bootstrap
