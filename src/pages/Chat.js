import React, { useState, createContext } from "react";
import ChatLabel from "../components/ChatLabel";
import ChatBox from "../components/ChatBox";
import ChatLinks from "../components/ChatLinks";
import ChatMessage from "../components/ChatMessage";

export const ChatContext = createContext();

export default function Chat() {
  const OpenAI = require("openai");
  let apikey = "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";

  const openai = new OpenAI({
    apiKey: apikey,
    dangerouslyAllowBrowser: true,
  });
  const [chat, setChat] = useState({
    userInput: "",
    language: "",
    chatLog: [],
    chatComponents: [],
    chatReply: "",
    waiting: true,
    updateInput: (event) => {
      const userInput = event.target.value;
      setChat((prevState) => {
        return { ...prevState, userInput: userInput };
      });
    },
    updateLanguage: (event) => {
      let languageChoice = event.target.id;
      setChat((prevState) => {
        return { ...prevState, language: languageChoice };
      });
    },
    addToChatLog: (inputObj) => {
      console.log(inputObj);
      const inputText = document.getElementById("text-input");
      inputText.value = "";
      let messageLog = chat.chatLog;
      if (messageLog.length > 6) {
        messageLog.shift();
        messageLog.push(inputObj);
      } else {
        messageLog.push(inputObj);
      }
      console.log(messageLog);
      setChat((prevState) => {
        return { ...prevState, chatLog: messageLog };
      });
      createChatComponents();
    },
    chatResponse: async (prompt) => {
      const completion = await openai.chat.completions.create({
        messages: prompt,
        model: "gpt-3.5-turbo",
        temperature: 1,
      });

      let aiReply = completion.choices[0].message.content;
      setChat((prevState) => {
        return { ...prevState, chatReply: aiReply };
      });
      let aiInput = { role: "assistant", content: aiReply };

      chat.addToChatLog(aiInput);
      createChatComponents();
      chat.changeWaiting(true);
    },
    clearChat: function () {
      setChat((prevState) => {
        return { ...prevState, chatComponents: [] };
      });
    },
    changeWaiting: function (boolean) {
      setChat((prevState) => {
        return { ...prevState, waiting: boolean };
      });
    },
    resetInputs: () => {
      setChat((prevState) => {
        return { ...prevState, userInput: "" };
      });
    },
  });

  function createChatComponents() {
    let i = 0;
    const chatComponents = chat.chatLog.map((inputObj) => {
      i++;
      const { role, content } = inputObj;
      return <ChatMessage role={role} content={content} key={i} />;
    });
    setChat((prevState) => {
      return { ...prevState, chatComponents: chatComponents };
    });
  }

  return (
    <>
      <ChatContext.Provider value={chat}>
        <div className="chat-main">
          <ChatLabel />
          <ChatBox>{chat.chatComponents}</ChatBox>
          <ChatLinks />
        </div>
      </ChatContext.Provider>
    </>
  );
}
