import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import TRANSLATION_PAGE from "./pages/Translation_Page";
import CHAT_PAGE from "./pages/Chat_Page";
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
        return { ...prevState, userInput: userInput };
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
