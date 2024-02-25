import React from "react";

export default function CHAT_SEND() {
  let chat = {};
  chat.userInput = true;
  return (
    <>
      <div className="col-12 text-input-div">
        <input
          id="text-input"
          class="text-input"
          type="text"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // addToChatLog(userInput);
              // chatResponse(chatPrompt);
              // resetInputs();
            }
          }}
          onChange={(event) => {
            //   updateChatInput(event);
            //   changeWaiting(false);
          }}
        />
        {chat.userInput === null || chat.userInput === "" ? null : <img className="send-button" src="https://cdn3.iconfinder.com/data/icons/pure-lines-color/100/sqi2016_bg1-go-17-512.png" alt="send-button" />}
      </div>
    </>
  );
}
