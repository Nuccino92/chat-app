import { useState } from "react";
import "./MessageDisplay.css";
import MessageDisplayCard from "./MessageDisplayCard";

const MessageDisplay = () => {
  return (
    <div className="MessageDisplay">
      <h3>Mesages</h3>
      <MessageDisplayCard />
      <MessageDisplayCard />
      <MessageDisplayCard />
      <MessageDisplayCard />
    </div>
  );
};

export default MessageDisplay;
