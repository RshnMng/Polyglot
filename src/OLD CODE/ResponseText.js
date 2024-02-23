import React, { useContext } from "react";
import { Context } from "../App";

export default function Input() {
  const state = useContext(Context);
  const output = state.translation;
  const updateOutputLang = state.updateOutputLang;

  return (
    <>
      <div className="translation-input-div">
        <div className="translation-label-textarea-div">
          <div className="translation-label-div">
            {state.language === "spanish" || state.language === "Spanish" ? (
              <select
                className="flag-box input-flag spanish-flag"
                onChange={(event) => {
                  updateOutputLang(event);
                }}
              >
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : state.language === "tagalog" || state.language === "Tagalog" ? (
              <select
                className="flag-box input-flag philippines-flag"
                onChange={(event) => {
                  updateOutputLang(event);
                }}
              >
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : state.language === "french" || state.language === "French" ? (
              <select
                className="flag-box input-flag french-flag"
                onChange={(event) => {
                  updateOutputLang(event);
                }}
              >
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : (
              <select
                className="flag-box input-flag english-flag"
                onChange={(event) => {
                  updateOutputLang(event);
                }}
              >
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            )}
            <h2 className="translation-label">Translation</h2>
          </div>
          <div className="text-div">
            <div className="response-textarea" rows={8} cols={45}>
              {output ? output : "Translating..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
