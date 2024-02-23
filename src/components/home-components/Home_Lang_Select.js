import React, { useContext } from "react";
import { Context } from "../../App";

export default function Home_Lang_Select() {
  const state = useContext(Context);
  const updateLanguage = state.updateLanguage;
  const addSelected = state.addSelected;

  // figure out what is triggering the update input in state based
  // on the select element click then figure out why tagalog and
  // spanish shows the french language as being selected in the
  // dropdown menu

  return (
    <>
      <div className="col col-md-11 col-sm-10 mx-auto my-auto  mb-3 home-lang-select">
        <div className="row home-lang-select-row d-flex justify-content-around">
          {state.inputLang === "french" || state.inputLang === "French" ? (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag english-flag" id="english"></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag french-flag" id="french"></div>
            </div>
          )}

          {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag english-flag" id="english"></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag spanish-flag" id="spanish"></div>
            </div>
          )}

          {state.inputLang === "tagalog" || state.inputLang === "Tagalog" ? (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag english-flag" id="english"></div>
            </div>
          ) : (
            <div className="col-3 mx-2 p-0">
              <div className="home-flag philippines-flag" id="tagalog"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
