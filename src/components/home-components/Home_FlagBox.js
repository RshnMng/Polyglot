import React, { useContext } from "react";
import { Context } from "../../App";

export default function Home_FlagBox() {
  const state = useContext(Context);
  let updateInputLang = state.updateInputLang;

  console.log(state);
  return (
    <>
      {state.inputLang == "spanish" || state.inputLang == "Spanish" ? (
        <select className="flag-box home-input-flag spanish-flag" onChange={(event) => updateInputLang(event)}>
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </select>
      ) : state.inputLang == "tagalog" || state.inputLang == "Tagalog" ? (
        <select className="flag-box home-input-flag philippines-flag" onChange={(event) => updateInputLang(event)}>
          <option></option>
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </select>
      ) : state.inputLang == "french" || state.inputLang == "French" ? (
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
    </>
  );
}
