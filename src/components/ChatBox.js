import React, { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../pages/Chat";

export default function ChatBox() {
  const chat = useContext(ChatContext);
  const updateChatInput = chat.updateInput;
  const userInput = { role: "user", content: chat.userInput };
  const addToChatLog = chat.addToChatLog;
  const chatComponents = chat.chatComponents;
  const language = chat.language;
  const chatResponse = chat.chatResponse;
  const waiting = chat.waiting;
  const changeWaiting = chat.changeWaiting;
  const resetInputs = chat.resetInputs;
  const chatLog = chat.chatLog;

  let dummyDiv = useRef();
  let chatPrompt = "";

  chatLog === "" || chatLog === null
    ? (chatPrompt = [
        {
          role: "system",
          content: `you are a friend that replies in ${language}. Keep responses to less than 15 words`,
        },
        {
          role: "user",
          content: chat.userInput,
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
          content: chat.userInput,
        },
      ]);

  useEffect(() => {
    if (dummyDiv.current) {
      dummyDiv.current.scrollIntoView();
    }
  }, [chatComponents]);

  return (
    <>
      <div className="chat-input-div">
        <div className="text-display" id="text-display">
          {waiting && (
            <div className="waiting">
              <img width={20} src="https://w7.pngwing.com/pngs/150/578/png-transparent-traffic-light-computer-icons-red-red-light-color-light-traffic.png" />
              <div className="waiting-label" alt="blinking light">
                Chatbot waiting...
              </div>
            </div>
          )}
          {chatComponents}
          <div className="dummy" ref={dummyDiv}></div>
        </div>
        <div className="text-input-div">
          <input
            id="text-input"
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addToChatLog(userInput);
                chatResponse(chatPrompt);
                resetInputs();
              }
            }}
            onChange={(event) => {
              updateChatInput(event);
              changeWaiting(false);
            }}
          />
          <div
            onClick={() => {
              addToChatLog(userInput);
              chatResponse(chatPrompt);
              resetInputs();
            }}
          >
            {chat.userInput === null || chat.userInput === "" ? null : <img className="send-button" src="https://cdn3.iconfinder.com/data/icons/pure-lines-color/100/sqi2016_bg1-go-17-512.png" alt="send-button" />}
          </div>
        </div>
      </div>
    </>
  );
}
