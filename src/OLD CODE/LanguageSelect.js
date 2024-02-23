import React, { useContext } from "react";
import { Context } from "../App";

export default function LanguageSelect() {
  const state = useContext(Context);
  const updateLanguage = state.updateLanguage;
  const addSelected = state.addSelected;

  return (
    <>
      <div className="home-lang-select-div">
        {/* <div className="home-lang-title">Select Language</div>
        <div className="home-lang-option-div">
          {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
            <div
              className="english-flag home-flag"
              name="flag"
              id="english"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          ) : (
            <div
              className="spanish-flag home-flag"
              name="flag"
              id="spanish"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          )}
          {state.inputLang === "french" || state.inputLang === "French" ? (
            <div
              className="english-flag home-flag"
              name="flag"
              id="english"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          ) : (
            <div
              className="french-flag home-flag "
              name="flag"
              id="french"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          )}

          {state.inputLang === "tagalog" || state.inputLang === "Tagalog" ? (
            <div
              className="english-flag home-flag"
              name="flag"
              id="english"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          ) : (
            <div
              className="philippines-flag home-flag"
              name="flag"
              id="tagalog"
              onClick={(event) => {
                updateLanguage(event);
                addSelected(event, ".home-flag");
              }}
            ></div>
          )}
        </div> */}
      </div>
    </>
  );
}
