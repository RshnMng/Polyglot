import React, { useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";

export default function HomeButtons() {
  const state = useContext(Context);
  const fetchResponse = state.fetchResponse;

  const messages = [
    {
      role: "system",
      content: `You're a language translator that reads what is sent to you and returns it in ${state.language} `,
    },
    {
      role: "user",
      content: state.userInput,
    },
  ];

  return (
    <>
      {state.userInput === "" || state.language === "" ? (
        <div className="home-btns">
          <div className="home-translate-btn-div">
            <Link to="/response" className="home-translate-btn">
              Add Text & Choose Language
            </Link>
          </div>
          <div className="home-chat-btn-div">
            <Link to="/chat" className="home-chat-btn">
              Start A Chat
            </Link>
          </div>
        </div>
      ) : (
        <div className="home-btns">
          <div className="home-translate-btn-div">
            <Link to="/response" className="home-translate-btn" onClick={() => fetchResponse(messages)}>
              Translate
            </Link>
          </div>
          <div className="home-chat-btn-div">
            <Link to="/chat" className="home-chat-btn">
              Start A Chat
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
