import "./ChatWindow.css";
import ChatWindowMessage from "./chatWindowMessage/ChatWindowMessage";
import Picker from "emoji-picker-react";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserRequest } from "../../../api/users";

const ChatWindow = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.chatReducer);
  const { participant } = useSelector((state) => state.chatReducer);
  const [message, setMessage] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setEmojiPicker(false);
  };

  const handleEmojis = () => {
    setEmojiPicker((prev) => !prev);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <div className="ChatWindow">
      {/* header is the current users in the chat */}
      <header>
        <h4>Chatting with</h4>
        {participant ? (
          <img src={participant.profilePicture} alt="User"></img>
        ) : null}
      </header>
      <div className="ChatWindow-body">
        {messages.map((info, index) => {
          let myMessage;
          info.senderID === user.id ? (myMessage = true) : (myMessage = false);
          return (
            <ChatWindowMessage myMessage={myMessage} info={info} key={index} />
          );
        })}
      </div>
      <footer>
        <div className="send-message-container">
          {emojiPicker && (
            <Picker
              pickerStyle={{ position: "absolute", marginTop: "-400px" }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <BsEmojiWink
            onClick={handleEmojis}
            style={{ cursor: "pointer", marginRight: "6px" }}
            size={20}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type a message"
            value={message}
          />
        </div>
        <div className="send-message-button">
          <AiOutlineSend color="white" size={20} />
        </div>
      </footer>
    </div>
  );
};

export default ChatWindow;
