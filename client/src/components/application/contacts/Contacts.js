import "./Contacts.css";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
import Contact from "./contact/Contact";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import AddContactModal from "./addcontactmodal/AddContactModal";

const Contacts = ({ setTab }) => {
  const [addContactModal, setAddContactModal] = useState(false);

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
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
            <input type="text" placeholder="search" />
          </div>
          <MdOutlineClose
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => setTab("home")}
          />
        </header>
        <div className="Contacts-body">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </animated.div>
      {addContactModal && (
        <animated.div style={style}>
          <AddContactModal setAddContactModal={setAddContactModal} />
        </animated.div>
      )}
    </div>
  );
};

export default Contacts;
