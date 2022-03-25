import "./Contact.css";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { deleteContactRequest } from "../../../../api/contact";
import { getUserRequest } from "../../../../api/users";
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
  const [loading, setLoading] = useState(true);
  const [user2Info, setUser2Info] = useState(null);

  const { userID1, userID2, id } = contact;

  const handleDelete = async () => {
    await deleteContactRequest(id)
      .then(async () => {
        await dispatch(deleteConversation(userID1, userID2))
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
    dispatch(getConversation(userID1, userID2));
    dispatch({ type: GET_PARTICIPANT, payload: user2Info });
    setTab("home");
  };

  useEffect(() => {
    const getUser = async (id) => {
      await getUserRequest(id).then((res) => {
        setUser2Info(res.data);
        setLoading(false);
      });
    };
    if (userID1 !== user.id) {
      getUser(userID1);
    }
    if (userID2 !== user.id) {
      getUser(userID2);
    }
  }, [user.id, userID1, userID2]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className={deleted ? "Contact deleted" : "Contact"}>
          <img src={user2Info.profilePicture} alt="Contact"></img>
          <div>
            <div>
              <h4>
                {user2Info.firstName} {user2Info.lastName}
              </h4>{" "}
              <p>
                Friends since - {new Date(contact.createdAt).toDateString()}
              </p>
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
      )}
    </>
  );
};

export default Contact;
