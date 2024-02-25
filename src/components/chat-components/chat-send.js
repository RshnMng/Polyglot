import React, { useContext } from "react";
import { Context } from "../../App";

export default function CHAT_SEND() {
  const state = useContext(Context);
  // const addToChatLog = state.addToChatLog;
  const chatResponse = state.chatResponse;
  const resetInputs = state.resetInputs;
  const chatLog = state.chatLog;
  const language = state.language;
  const updateInput = state.updateInput;

  let chatPrompt = "";

  chatLog === "" || chatLog === null
    ? (chatPrompt = [
        {
          role: "system",
          content: `you are a friend that replies in ${language}. Keep responses to less than 15 words`,
        },
        {
          role: "user",
          content: state.userInput,
        },
      ])
    : (chatPrompt = [
        {
          role: "system",
          content: `you are a friend that replies in ${language}. Keep responses to less than 15 words`,
        },

        ...chatLog.map((message) => {
          return message;
        }),

        {
          role: "user",
          content: state.userInput,
        },
      ]);

  let chat = {};
  return (
    <>
      <div className="col-12 text-input-div">
        <input
          id="text-input"
          className="text-input"
          type="text"
          value={state.userInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // addToChatLog(userInput);
              console.log("enter key");
              chatResponse(chatPrompt);
              resetInputs();
            }
          }}
          onChange={(event) => {
            updateInput(event);
            //   changeWaiting(false);
          }}
        />
        {chat.userInput === null || chat.userInput === "" ? null : <img className="send-button" src="https://cdn3.iconfinder.com/data/icons/pure-lines-color/100/sqi2016_bg1-go-17-512.png" alt="send-button" />}
      </div>
    </>
  );
}
