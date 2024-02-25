import React from "react";
import CHAT_BUTTONS from "../components/chat-components/chat-buttons";
import CHAT_LANG_SELECT from "../components/chat-components/chat-lang-select";
import CHAT_BOX from "../components/chat-components/chat-box";
import CHAT_SEND from "../components/chat-components/chat-send";

export default function CHAT_PAGE() {
  return (
    <>
      <div className="col-12 col-md-7 mr-5 chat-large-left">
        <CHAT_BOX />
        <CHAT_SEND />
      </div>
      <div className="col-12 col-md-5 mt-md-5 mr-5 chat-large-right">
        <div className="col-12 chat-lang-select">
          <CHAT_LANG_SELECT />
        </div>
        <CHAT_BUTTONS />
      </div>
    </>
  );
}
