import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
export default function Translation_Buttons() {
  const state = useContext(Context);
  const fetchResponse = state.fetchResponse;
  const switchLangs = state.switchLangs;
  let lang1 = state.inputLang;
  let lang2 = state.language;

  const messages = [
    {
      role: "system",
      content: `translate ${state.userInput} from ${state.inputLang} into ${state.language} `,
    },
    {
      role: "user",
      content: state.userInput,
    },
  ];

  return (
    <>
      <div className="col-12  mb-auto mt-5 translation-buttons">
        <div className="row home-btn-row mb-3">
          <Link to="/chat" className="home-btn col-10 col-lg-10 col-xs-6">
            Start A Chat
          </Link>
          {state.userInput === "" || state.userInput === null || state.language === "" || state.language === null ? (
            <Link className="home-btn col-10 col-lg-10 col-xs-6" disabled>
              Add Text, Choose Lang. to Translate
            </Link>
          ) : (
            <Link to="/translation" className="home-btn col-10 col-lg-10 col-xs-6" onClick={() => fetchResponse(messages)}>
              Translate
            </Link>
          )}
          <Link to="/" className="home-btn col-10 col-lg-10 col-xs-6" onClick={state.clearInput}>
            Go Home
          </Link>
          <button
            to="/translation"
            className="home-btn col-10 col-lg-10 col-xs-6"
            onClick={() => {
              switchLangs(lang1, lang2);
            }}
          >
            Switch
          </button>
          <button to="/translation" className="home-btn col-10 col-lg-10 col-xs-6" onClick={state.clearInput}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
