import "./MessageDisplay.css";
import MessageDisplayCard from "./MessageDisplayCard";

const MessageDisplay = ({ filteredData }) => {
  return (
    <div className="MessageDisplay">
      <h3>Chats</h3>
      <div className="MessageDisplay-body">
        {filteredData.map((contact, index) => {
          return <MessageDisplayCard contact={contact} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MessageDisplay;
