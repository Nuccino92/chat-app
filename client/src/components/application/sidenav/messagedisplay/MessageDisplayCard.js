import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../../../redux/actions/chat";
import { GET_PARTICIPANT } from "../../../../redux/actions/types";

const MessageDisplayCard = ({ contact }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const handleClick = async () => {
    dispatch(getConversation(contact.id, user.id));
    dispatch({ type: GET_PARTICIPANT, payload: contact });
  };

  return (
    <div className="MessageDisplayCard" onClick={handleClick}>
      <img src={contact.profilePicture} alt="Contact" />
      <div>
        <h4>
          {contact.firstName} {contact.lastName}
        </h4>
        <p>I NEED TO GET THE MESSAGES FOR THIS THING TO WORK</p>
      </div>
    </div>
  );
};

export default MessageDisplayCard;
