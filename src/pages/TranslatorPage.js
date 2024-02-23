import React from "react";
import OriginalText from "../OLD CODE/OriginalText";
import ResponseText from "../OLD CODE/ResponseText";
import Buttons from "../OLD CODE/Buttons";

export default function TranslatorPage() {
  return (
    <>
      <div className="response-main">
        <OriginalText />
        <ResponseText />
        <Buttons />
      </div>
    </>
  );
}
