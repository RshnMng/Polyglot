import React from "react";
import { Link } from "react-router-dom";

export default function ChatBtn() {
  return (
    <>
      <div>
        <Link to="/chat">Start A Chat</Link>
      </div>
    </>
  );
}
