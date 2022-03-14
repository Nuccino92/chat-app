import { useState } from "react";
import "./MessageDisplay.css";
import MessageDisplayCard from "./MessageDisplayCard";

const MessageDisplay = () => {
  return (
    <div className="MessageDisplay">
      <h3>Chats</h3>
      <div className="MessageDisplay-body">
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
        <MessageDisplayCard />
      </div>
    </div>
  );
};

export default MessageDisplay;
