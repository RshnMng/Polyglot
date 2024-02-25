import React, { useContext } from "react";
import { Context } from "../../App";

export default function TRANSLATION_FLAGBOX() {
  const state = useContext(Context);
  const updateOutputLang = state.updateOutputLang;
  return (
    <>
      {state.language === "spanish" || state.language === "Spanish" ? (
        <select className="dropdown flag-box home-input-flag spanish-flag" onChange={(event) => updateOutputLang(event)}>
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </select>
      ) : state.language === "tagalog" || state.language === "Tagalog" ? (
        <select className="dropdown flag-box home-input-flag philippines-flag" onChange={(event) => updateOutputLang(event)}>
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </select>
      ) : state.language === "french" || state.language === "French" ? (
        <select className="dropdown flag-box home-input-flag french-flag" onChange={(event) => updateOutputLang(event)}>
          {/* <option></option> */}
          <option>Choose Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Tagalog</option>
        </select>
      ) : (
        <select className="dropdown flag-box home-input-flag english-flag" onChange={(event) => updateOutputLang(event)}>
          {/* <option></option> */}
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
