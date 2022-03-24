import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserConversations } from "../../../../api/conversation";
import "./MessageDisplay.css";
import MessageDisplayCard from "./MessageDisplayCard";

const MessageDisplay = () => {
  const { user } = useSelector((state) => state.userReducer);

  const [receivedConversations, setReceivedConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getConversations = async () => {
      await getUserConversations(user.id).then((res) => {
        setReceivedConversations(res.data);
        setLoading(false);
      });
    };
    getConversations();
  }, [user.id]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="MessageDisplay">
          <h3>Chats</h3>
          <div className="MessageDisplay-body">
            {receivedConversations.map((conversation, index) => {
              return (
                <MessageDisplayCard
                  id={user.id}
                  conversation={conversation}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MessageDisplay;
