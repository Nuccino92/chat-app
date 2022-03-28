import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationMessagesRequest,
  getConversationRequest,
} from "../../../../api/conversation";
import { getConversation } from "../../../../redux/actions/chat";
import { GET_PARTICIPANT } from "../../../../redux/actions/types";

const MessageDisplayCard = ({ contact }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const [lastMessage, setLastMessage] = useState("");

  const handleClick = async () => {
    dispatch(getConversation(contact.id, user.id));
    dispatch({ type: GET_PARTICIPANT, payload: contact });
  };

  useEffect(() => {
    const getConversation = async () => {
      await getConversationRequest(user.id, contact.id).then(async (res) => {
        await getConversationMessagesRequest(res.data.id).then((res) => {
          setLastMessage(res.data.slice(-1)[0].content);
        });
      });
    };
    getConversation();
  }, [contact.id, user.id]);

  return (
    <div className="MessageDisplayCard" onClick={handleClick}>
      <img src={contact.profilePicture} alt="Contact" />
      <div>
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

export default MessageDisplayCard;
