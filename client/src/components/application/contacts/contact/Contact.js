import "./Contact.css";
import { BsTrash } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="Contact">
      <img
        src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
        alt="Contact"
      ></img>
      <div>
        <div>
          <h4>Junimo Miller</h4> <p>Friends since - May 12, 2022</p>
        </div>
        <p> I like to eat cake and cho..</p>
      </div>
      <BsTrash className="delete-contact" size={20} title="Delete contact" />
    </div>
  );
};

export default Contact;
