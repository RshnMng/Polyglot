import React from "react";

export default function Home_Buttons() {
  return (
    <>
      <div className="col-12 col-md-5  mb-auto home-buttons">
        <div className="row home-btn-row mb-3">
          <button className="home-btn col-10 col-lg-10 col-xs-6">Start A Chat</button>
          <button className="home-btn col-10 col-lg-10 col-xs-6">Translate</button>
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
