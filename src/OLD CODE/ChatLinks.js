import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "./Chat";
import { Context } from "../App";

export default function ChatLinks() {
  const chat = useContext(ChatContext);
  const state = useContext(Context);
  const updateLanguage = chat.updateLanguage;
  const clearChat = chat.clearChat;
  const addSelected = state.addSelected;

  return (
    <>
      <div className="change-lang-div">
        <div
          id="french"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag french-flag"
        ></div>
        <div
          id="tagalog"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag philippines-flag"
        ></div>
        <div
          id="spanish"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag spanish-flag"
        ></div>
        <div
          id="english"
          onClick={(event) => {
            updateLanguage(event);
            addSelected(event, ".chat-flag");
          }}
          className="chat-flag english-flag"
        ></div>
      </div>
      <div className="chat-links">
        <Link to="/">
          <button className="chat-link">Go Back Home</button>
        </Link>
        <Link to="/response">
          <button className="chat-link">Go To Translator</button>
        </Link>
        <button className="chat-link" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
    </>
  );
}
