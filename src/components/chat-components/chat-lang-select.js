import React from "react";

export default function CHAT_LANG_SELECT() {
  return (
    <>
      <div className="change-lang-div col-12 d-flex justify-content-around">
        <div
          id="french"
          onClick={(event) => {
            // updateLanguage(event);
            // addSelected(event, ".chat-flag");
          }}
          className="chat-flag french-flag"
        ></div>
        <div
          id="tagalog"
          onClick={(event) => {
            // updateLanguage(event);
            // addSelected(event, ".chat-flag");
          }}
          className="chat-flag philippines-flag"
        ></div>
        <div
          id="spanish"
          onClick={(event) => {
            // updateLanguage(event);
            // addSelected(event, ".chat-flag");
          }}
          className="chat-flag spanish-flag"
        ></div>
        <div
          id="english"
          onClick={(event) => {
            // updateLanguage(event);
            // addSelected(event, ".chat-flag");
          }}
          className="chat-flag english-flag"
        ></div>
      </div>
    </>
  );
}
