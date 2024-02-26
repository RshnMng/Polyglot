import React from "react";

export default function CHAT_MESSAGE({ role, content }) {
  return (
    <>
      <div className="message-container">
        <div className={role === "user" ? "message-div sent-by-user" : "message-div sent-by-ai"}>{content}</div>
      </div>
    </>
  );
}
