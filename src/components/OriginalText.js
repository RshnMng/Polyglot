import React from "react";
import { useContext } from "react";
import { Context } from "../App";

export default function OriginalText() {
  const state = useContext(Context);
  const input = state.userInput;
  const updateInput = state.updateInput;
  const updateInputLang = state.updateInputLang;

  return (
    <>
      <div className="response-input-div">
        <div className="response-label-textarea-div">
          <div className="response-label-div">
            {state.inputLang == "spanish" || state.inputLang == "Spanish" ? (
              <select className="flag-box input-flag spanish-flag" onChange={(event) => updateInputLang(event)}>
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : state.inputLang == "tagalog" || state.inputLang == "Tagalog" ? (
              <select className="flag-box input-flag philippines-flag" onChange={(event) => updateInputLang(event)}>
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : state.inputLang == "french" || state.inputLang == "French" ? (
              <select className="flag-box response-input-flag french-flag" onChange={(event) => updateInputLang(event)}>
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            ) : (
              <select className="flag-box input-flag english-flag" onChange={(event) => updateInputLang(event)}>
                <option>Choose Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Tagalog</option>
              </select>
            )}
            <h2 className="response-label">Original Text</h2>
          </div>
          <div className="text-div">
            <textarea className="response-textarea" rows={8} cols={45} onChange={updateInput} value={input}></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
