import React, { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";

export default function Home_Buttons() {
  const state = useContext(Context);
  const fetchResponse = state.fetchResponse;

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
      <div className="col-12 col-md-5  mb-auto home-buttons">
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
        </div>
      </div>
    </>
  );
}
// i need a empty div that flex grows above lang select based on
// vertical screen space alloted -- this needs to happen any time the height of the
// screen is larger than the width (portriat mode) and width under 766px;

// then when it switches to wider than it is tall (landscape mode) we need
// that div above lang select and the text box to grow and split the difference
// in the space made there
