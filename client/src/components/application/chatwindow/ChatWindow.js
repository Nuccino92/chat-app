import "./ChatWindow.css";
import ChatWindowMessage from "./chatWindowMessage/ChatWindowMessage";
import Picker from "emoji-picker-react";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageRequest } from "../../../api/messages";
import logo from "../../../images/chatify-logo.png";
import { getConversation } from "../../../redux/actions/chat";

import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://localhost:8000/";

const ChatWindow = () => {
  const scrollRef = useRef();
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { messages, chat, participant } = useSelector(
    (state) => state.chatReducer
  );

  const [message, setMessage] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [createMessageData, setCreateMessageData] = useState({
    conversationID: null,
    senderID: user.id,
    content: "",
  });

  const [updatedMessages, setUpdatedMessages] = useState([]);

  // holds the socket emitted message
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setEmojiPicker(false);
  };

  const handleEmojis = () => {
    setEmojiPicker((prev) => !prev);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setMessage(value);

    setCreateMessageData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    if (!createMessageData.content) return;
    await createMessageRequest(createMessageData).then(() => {
      dispatch(getConversation(chat.userID1, chat.userID2));

      socket.emit("sendMessage", {
        senderId: user.id,
        receiverId: participant.id,
        content: message.content,
      });
    });

    setCreateMessageData((prev) => {
      return {
        ...prev,
        content: "",
      };
    });

    setMessage("");
  };

  useEffect(() => {
    setUpdatedMessages(messages);
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  }, [updatedMessages]);

  // keep content fully updated if last character was emoji in content
  useEffect(() => {
    setCreateMessageData((prev) => {
      return {
        ...prev,
        content: message,
      };
    });
  }, [message]);

  // when selecting chat, make conversationID = chat.id
  useEffect(() => {
    setCreateMessageData((prev) => {
      return {
        ...prev,
        conversationID: chat !== null ? chat.id : null,
      };
    });
  }, [chat]);

  // if arrival message and inside the correct conversation, update conversation messages
  useEffect(() => {
    arrivalMessage &&
      (chat.userID1 === arrivalMessage.sender ||
        chat.userID2 === arrivalMessage.sender) &&
      setUpdatedMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, chat]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        content: data.content,
        createdAt: Date.now(),
      });
    });
  }, []);

  return (
    <div className="ChatWindow">
      {/* header is the current users in the chat */}
      <header>
        <h4>Chatting with</h4>
        {participant ? (
          <img src={participant.profilePicture} alt="User"></img>
        ) : null}
      </header>
      <div
        className="ChatWindow-body"
        style={chat === null ? { background: "#1A3268" } : null}
      >
        {chat === null && (
          <div className="no-chat-text">
            <p>Select a chat</p>
            <img src={logo} alt="Logo" />
          </div>
        )}

        {updatedMessages.map((info, index) => {
          let myMessage;
          info.senderID === user.id ? (myMessage = true) : (myMessage = false);

          return (
            <div key={index} ref={scrollRef}>
              <ChatWindowMessage
                myMessage={myMessage}
                info={info}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <footer style={chat === null ? { pointerEvents: "none" } : null}>
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
            ref={inputRef}
            name="content"
            onChange={handleChange}
            type="text"
            placeholder="Type a message"
            value={message}
          />
        </div>
        <div
          style={chat === null ? { pointerEvents: "none" } : null}
          className="send-message-button"
          onClick={handleSubmit}
        >
          <AiOutlineSend color="white" size={17} />
        </div>
      </footer>
    </div>
  );
};

export default ChatWindow;
