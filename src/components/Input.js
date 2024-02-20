import React, { useContext } from "react";
import { Context } from "../App";

export default function Input() {
  const state = useContext(Context);
  const input = state.userInput;
  const updateInput = state.updateInput;
  const updateInputLang = state.updateInputLang;

  return (
    <>
      <div className="home-label-textarea-div">
        <div className="home-label-div">
          {state.inputLang === "spanish" || state.inputLang === "Spanish" ? (
            <select className="flag-box home-input-flag spanish-flag" onChange={(event) => updateInputLang(event)}>
              <option>Choose Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Tagalog</option>
            </select>
          ) : state.inputLang === "tagalog" || state.inputLang === "Tagalog" ? (
            <select className="flag-box home-input-flag philippines-flag" onChange={(event) => updateInputLang(event)}>
              <option></option>
              <option>Choose Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Tagalog</option>
            </select>
          ) : state.inputLang === "french" || state.inputLang === "French" ? (
            <select className="flag-box home-input-flag french-flag" onChange={(event) => updateInputLang(event)}>
              <option></option>
              <option>Choose Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Tagalog</option>
            </select>
          ) : (
            <select className="flag-box home-input-flag english-flag" onChange={(event) => updateInputLang(event)}>
              <option></option>
              <option>Choose Language</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Tagalog</option>
            </select>
          )}
          <h2 className="home-label">Text To Translate</h2>
        </div>
        <div className="text-div">
          <textarea className="home-textarea" onChange={updateInput} value={input}></textarea>
        </div>
      </div>
    </>
  );
}
