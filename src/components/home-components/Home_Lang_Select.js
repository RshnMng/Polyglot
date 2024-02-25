import React, { useContext } from "react";
import { Context } from "../../App";

export default function Home_Lang_Select() {
  const state = useContext(Context);
  const updateLanguage = state.updateLanguage;
  const addSelected = state.addSelected;

  return (
    <>
      <div className="col col-md-11 col-sm-10 mx-auto my-auto  mb-3 home-lang-select">
        <div className="row home-lang-select-row d-flex justify-content-around">
          {state.inputLang === "french" || state.inputLang === "French" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag french-flag"
                id="french"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag spanish-flag"
                id="spanish"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}

          {state.inputLang === "tagalog" || state.inputLang === "Tagalog" ? (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag english-flag"
                id="english"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div
                className="home-flag philippines-flag"
                id="tagalog"
                name="flag"
                onClick={(event) => {
                  updateLanguage(event);
                  addSelected(event, ".home-flag");
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
