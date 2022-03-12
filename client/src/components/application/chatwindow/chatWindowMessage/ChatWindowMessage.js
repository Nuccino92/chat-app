import "./ChatWindowMessage.css";

const ChatWindowMessage = ({ myMessage }) => {
  return (
    <>
      {myMessage ? (
        <div className="ChatWindowMessage message-sent">
          <div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              your message &#160; 4:44 am
            </span>
            <p>I need to go to the gym and eat a box of curry chicken </p>
          </div>
        </div>
      ) : (
        <div className="ChatWindowMessage message-received">
          <img
            src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
            alt="Profile"
          ></img>
          <div>
            <span>Junimo Miller</span>&#160;
            <span
              style={{
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              4:15 am
            </span>
            <p>I ate some bad food man</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindowMessage;
