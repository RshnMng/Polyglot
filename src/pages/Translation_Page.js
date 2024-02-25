import React from "react";
import TRANSLATION_BUTTONS from "../components/translation-components/translation_buttons";
import ORIGINAL_TEXT from "../components/translation-components/Original_Text";
import TRANSLATION from "../components/translation-components/Translation";

export default function TRANSLATION_PAGE() {
  return (
    <>
      <div className="col-12 col-md-7">
        <ORIGINAL_TEXT />
        <TRANSLATION />
      </div>
      <div className="col-12 col-md-5">
        <TRANSLATION_BUTTONS />
      </div>
    </>
  );
}
