import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Response from "./pages/TranslatorPage";
import Chat from "./pages/Chat";
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

  return (
    <>
      <div className="container-fluid app">
        <div className="row home-row">
          <Context.Provider value={state}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/response" element={<Response />} />
                  <Route path="/chat" element={<Chat />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Context.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
