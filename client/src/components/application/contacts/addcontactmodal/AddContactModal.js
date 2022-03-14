import "./AddContactModal.css";
import { MdOutlineClose } from "react-icons/md";

const AddContactModal = ({ setAddContactModal }) => {
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
        <input type="text" placeholder="ex #3429238498"></input>
      </div>
    </div>
  );
};

export default AddContactModal;
