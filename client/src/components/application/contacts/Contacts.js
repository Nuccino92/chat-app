import "./Contacts.css";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
import Contact from "./contact/Contact";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import AddContactModal from "./addcontactmodal/AddContactModal";
import { useSelector } from "react-redux";
import { getConfirmedContactsRequest } from "../../../api/contact";
import { getUserRequest } from "../../../api/users";

import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://localhost:8000/";

const Contacts = ({ setTab }) => {
  const inputRef = useRef();
  const { user } = useSelector((state) => state.userReducer);

  const [addContactModal, setAddContactModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  const [filteredData, setFitleredData] = useState([]);

  const [connectedUsers, setConnectedUsers] = useState([]);

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleFilter = (e) => {
    const word = e.target.value;

    const newFilter = users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(word.toLowerCase()) ||
        user.lastName.toLowerCase().includes(word.toLowerCase())
      );
    });

    word === "" ? setFitleredData(users) : setFitleredData(newFilter);
  };

  useEffect(() => {
    const getContacts = async () => {
      await getConfirmedContactsRequest(user.id).then((res) => {
        res.data.forEach(async (e) => {
          let id = e.userID1 !== user.id ? e.userID1 : e.userID2;

          await getUserRequest(id).then((res) => {
            setUsers((prev) => {
              return [...prev, res.data];
            });

            setFitleredData((prev) => {
              return [...prev, res.data];
            });

            setLoading(false);
          });
        });
      });
    };
    getContacts();
  }, [user.id]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  useEffect(() => {
    socket.emit("addUser", user.id);
    socket.on("getUsers", (users) => {
      setConnectedUsers(users);
    });
  }, [user]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="Contacts">
          <animated.div style={style}>
            <header>
              <h1>Contacts</h1>
              <button
                title="Add contact"
                className="add-contact-button"
                onClick={() => setAddContactModal(true)}
              >
                Add contact
              </button>
              <div className="Contacts-searchbar-container">
                <BiSearchAlt2 size={20} color={"grey"} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="find contact"
                  onChange={handleFilter}
                />
              </div>
              <MdOutlineClose
                style={{ cursor: "pointer" }}
                size={30}
                onClick={() => setTab("home")}
              />
            </header>
            <div className="Contacts-body">
              {filteredData.map((contact, index) => {
                const onlineStatus = connectedUsers.some(
                  (active) => active.userId === contact.id
                );
                return (
                  <Contact
                    setTab={setTab}
                    contact={contact}
                    key={index}
                    onlineStatus={onlineStatus}
                  />
                );
              })}
            </div>
          </animated.div>
          {addContactModal && (
            <animated.div style={style}>
              <AddContactModal setAddContactModal={setAddContactModal} />
            </animated.div>
          )}
        </div>
      )}
    </>
  );
};

export default Contacts;
