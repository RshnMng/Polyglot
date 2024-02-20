import React from "react";
import OriginalText from "../components/OriginalText";
import ResponseText from "../components/ResponseText";
import Buttons from "../components/Buttons";

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
