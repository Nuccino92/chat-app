import "./Contact.css";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { deleteContactRequest } from "../../../../api/contact";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteConversation,
  getConversation,
} from "../../../../redux/actions/chat";
import { BiMessageDetail } from "react-icons/bi";
import { GET_PARTICIPANT } from "../../../../redux/actions/types";

const Contact = ({ contact, setTab }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [deleted, setDeleted] = useState(false);

  const { id } = contact;

  const handleDelete = async () => {
    await deleteContactRequest(id)
      .then(async () => {
        await dispatch(deleteConversation(user.id, id))
          .then(() => {
            setDeleted(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMessage = () => {
    dispatch(getConversation(user.id, id));
    dispatch({ type: GET_PARTICIPANT, payload: contact });
    setTab("home");
  };

  return (
    <div className={deleted ? "Contact deleted" : "Contact"}>
      <img src={contact.profilePicture} alt="Contact"></img>
      <div>
        <div>
          <h4>
            {contact.firstName} {contact.lastName}
          </h4>{" "}
          <p>Friends since - {new Date(contact.createdAt).toDateString()}</p>
        </div>
        <p> I like to eat cake and cho..</p>
      </div>
      <div className="Contact-buttons">
        <BiMessageDetail
          size={30}
          title="Send message"
          className="message-contact"
          onClick={handleMessage}
        />
        <BsTrash
          className="delete-contact"
          size={20}
          title="Delete contact"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Contact;
