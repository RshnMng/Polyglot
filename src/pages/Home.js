import React from "react";
import Input from "../components/Input";
import LanguageSelect from "../components/LanguageSelect";
import HomeButtons from "../components/HomeButtons";

export default function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-input-div">
          <Input />
          <LanguageSelect />
        </div>
        <HomeButtons />
      </div>
    </>
  );
}

//1. set up second page, display original text and translation
