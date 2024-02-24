import React from "react";
import OriginalText from "./OriginalText";
import ResponseText from "./ResponseText";
import Buttons from "./Buttons";

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
