import "./AddContactModal.css";
import { MdOutlineClose } from "react-icons/md";
import {
  createContactRequest,
  getAllContactsRequest,
} from "../../../../api/contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "../../../../redux/actions/user";
import FormError from "../../../formError/FormError";

const AddContactModal = ({ setAddContactModal }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const [contactId, setContactId] = useState(null);
  const [error, setError] = useState({
    isError: false,
    message: "",
    location: "contact",
  });

  const addContact = async () => {
    await createContactRequest(user.id, contactId)
      .then(() => {
        dispatch(loadUser());
        setAddContactModal(false);
      })
      .catch(() => {
        return setError((prev) => {
          return {
            ...prev,
            message: `No user with matching id`,
            isError: true,
          };
        });
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setContactId(parseInt(value));
    setError({
      isError: false,
      message: "",
      location: "contact",
    });
  };

  const handleClick = async () => {
    if (!contactId) {
      return setError((prev) => {
        return {
          ...prev,
          message: "Please enter an ID",
          isError: true,
        };
      });
    }
    if (contactId === user.id) {
      return setError((prev) => {
        return {
          ...prev,
          message: `You can't add yourself!`,
          isError: true,
        };
      });
    }

    await getAllContactsRequest(user.id).then((res) => {
      let found = res.data.some(
        (each) => each["userID1"] === contactId || each["userID2"] === contactId
      );
      if (found)
        return setError((prev) => {
          return {
            ...prev,
            message: "You've already contacted this user",
            isError: true,
          };
        });
      addContact();
    });
  };

  return (
    <div className="AddContactModal">
      <div className="AddContactModal-body">
        <header>
          <h2>Enter User Id</h2>
          <MdOutlineClose
            onClick={() => setAddContactModal(false)}
            size={26}
            style={{ cursor: "pointer" }}
          />
        </header>
        <input
          onChange={handleChange}
          name="user2"
          type="number"
          placeholder="example: 34542"
        ></input>
        <button onClick={handleClick}>Add Contact</button>
        {error.isError && (
          <FormError message={error.message} location={"contact"} />
        )}
      </div>
    </div>
  );
};

export default AddContactModal;
