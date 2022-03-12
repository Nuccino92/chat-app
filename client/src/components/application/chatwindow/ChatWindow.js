import "./ChatWindow.css";
import ChatWindowMessage from "./chatWindowMessage/ChatWindowMessage";
import Picker from "emoji-picker-react";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";

const ChatWindow = () => {
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
        <img
          src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
          alt="User"
        ></img>
      </header>
      <div className="ChatWindow-body">
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
        <ChatWindowMessage myMessage={false} />
        <ChatWindowMessage myMessage={true} />
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
