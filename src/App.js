import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import TRANSLATION_PAGE from "./pages/Translation_Page";
import CHAT_PAGE from "./pages/Chat_Page";
import CHAT_MESSAGE from "./components/chat-components/chat-message";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Context = createContext();

function App() {
  const OpenAI = require("openai");
  let apikey = "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";

  const openai = new OpenAI({
    apiKey: apikey,
    dangerouslyAllowBrowser: true,
  });

  const [state, setState] = useState({
    userInput: "",
    inputLang: "english",
    language: "",
    translation: " ",
    updateLanguage: (event) => {
      let languageChoice = event.target.id;
      setState((prevState) => {
        return { ...prevState, language: languageChoice };
      });
    },
    updateInputLang: (event) => {
      console.log(event.target.value);
      let languageChoice = event.target.value;
      setState((prevState) => {
        return { ...prevState, inputLang: languageChoice };
      });
    },
    updateOutputLang: (event) => {
      let languageChoice = event.target.value;
      setState((prevState) => {
        return { ...prevState, language: languageChoice };
      });
    },
    updateInput: (event) => {
      const userInput = event.target.value;
      setState((prevState) => {
        return { ...prevState, userInput: userInput, waiting: false };
      });
    },
    fetchResponse: async (aiPrompt) => {
      setState((prevState) => {
        return { ...prevState, translation: "" };
      });
      const completion = await openai.chat.completions.create({
        messages: aiPrompt,
        model: "gpt-3.5-turbo",
        presence_penalty: -2,
        frequency_penalty: -2,
      });
      console.log(completion);
      let translation = completion.choices[0].message.content;
      setState((prevState) => {
        return { ...prevState, translation: translation };
      });
    },
    clearInput: () => {
      setState((prevState) => {
        return { ...prevState, userInput: "", translation: " " };
      });
    },
    addSelected: (event, flagGroup) => {
      let currentDiv = event.target;
      const flags = document.querySelectorAll(`${flagGroup}`);
      flags.forEach((flag) => {
        flag.classList.remove("selected");
      });
      currentDiv.classList.add("selected");
    },
    switchLangs: (lang1, lang2) => {
      setState((prevState) => {
        return { ...prevState, inputLang: lang2, language: lang1 };
      });
    },
    resetInputs: () => {
      setState((prevState) => {
        return { ...prevState, userInput: "" };
      });
    },
    addToChatLog: (inputObj, messageLog, createChatComponents) => {
      console.log(inputObj);
      const inputText = document.getElementById("text-input");
      inputText.value = "";
      if (messageLog.length > 6) {
        messageLog.shift();
        messageLog.push(inputObj);
      } else {
        messageLog.push(inputObj);
      }
      setState((prevState) => {
        return { ...prevState, chatLog: messageLog };
      });
      createChatComponents(messageLog);
    },
    chatResponse: async (aiPrompt, addToChatLog, messageLog, createChatComponents) => {
      const completion = await openai.chat.completions.create({
        messages: aiPrompt,
        model: "gpt-3.5-turbo",
        temperature: 1,
      });

      let aiReply = completion.choices[0].message.content;
      setState((prevState) => {
        return { ...prevState, chatReply: aiReply };
      });
      let aiInput = { role: "assistant", content: aiReply };

      addToChatLog(aiInput, messageLog, createChatComponents);
      createChatComponents(messageLog);
      state.changeWaiting(true);
    },
    chatReply: "",
    chatLog: [],
    chatComponents: [],
    createChatComponents(chatLog) {
      let i = 0;

      const chatComponents = chatLog.map((inputObj) => {
        i++;
        const { role, content } = inputObj;
        return <CHAT_MESSAGE role={role} content={content} key={i} />;
      });
      setState((prevState) => {
        return { ...prevState, chatComponents: chatComponents };
      });
    },
    waiting: true,
    changeWaiting: function (boolean) {
      setState((prevState) => {
        return { ...prevState, waiting: boolean };
      });
    },
  });

  console.log(state);

  return (
    <>
      <div className="check"></div>
      <div className="container-fluid app d-flex flex-column">
        <div className="row home-row flex-grow-1">
          <Context.Provider value={state}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/translation" element={<TRANSLATION_PAGE />} />
                  <Route path="/chat" element={<CHAT_PAGE />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Context.Provider>
        </div>
      </div>
      <div className="check"></div>
    </>
  );
}

export default App;
