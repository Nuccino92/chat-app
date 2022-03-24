import "./Contact.css";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { deleteContactRequest } from "../../../../api/contact";
import { getUserRequest } from "../../../../api/users";
import { useSelector } from "react-redux";
import moment from "moment";

const Contact = ({ contact }) => {
  const { user } = useSelector((state) => state.userReducer);

  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user2Info, setUser2Info] = useState(null);

  const handleDelete = async () => {
    await deleteContactRequest(contact.id).then(() => {
      // wait to make sure delete works before changing state
      setDeleted(true);
    });
  };

  useEffect(() => {
    const getUser = async (id) => {
      await getUserRequest(id).then((res) => {
        setUser2Info(res.data);
        setLoading(false);
      });
    };
    if (contact.userID1 !== user.id) {
      getUser(contact.userID1);
    }
    if (contact.userID2 !== user.id) {
      getUser(contact.userID2);
    }
  }, [contact.userID1, contact.userID2, user.id]);

  console.log(new Date(contact.createdAt).toDateString());

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
          <BsTrash
            className="delete-contact"
            size={20}
            title="Delete contact"
            onClick={handleDelete}
          />
        </div>
      )}
    </>
  );
};

export default Contact;
