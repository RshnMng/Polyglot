import React from "react";
import Input from "../components/Input";
import LanguageSelect from "../components/LanguageSelect";
import HomeButtons from "../components/HomeButtons";

export default function Home() {
  return (
    <>
      <div className="col-12 home-input">
        <div className="row home-input-row mt-2">
          <div className="col-12 col-lg-7 col-lg-offset-3 mb-2 home-title">Text to Translate</div>
          <div className="col col-lg-auto empty"></div>
          <div className="col-12 col-lg-7 col-sm-7 home-textarea-div">
            <div className="row home-textarea-row">
              <div className="col-2 textarea-empty"></div>
              <div className="col-8 textarea-div">
                <textarea className="main-textarea"></textarea>
              </div>
              <div className="col-2 textarea-empty"></div>
              <div className="col-12 home-lang-select">
                <div className="row home-lang-select-row ">
                  <div className="col-4 gx-3 gy-3 ">
                    <div className="home-flag french-flag"></div>
                  </div>
                  <div className="col-4 gx-3 gy-3 ">
                    <div className="home-flag spanish-flag"></div>
                  </div>
                  <div className="col-4 gx-3 gy-3 ">
                    <div className="home-flag philippines-flag"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-auto empty"></div>
          <div className="col-12 col-lg-4 home-buttons">home buttons</div>
        </div>
      </div>
    </>
  );
}

// style home flags using old styling and then give them the proper background image
// then style the select drop menu using  bootstrap
