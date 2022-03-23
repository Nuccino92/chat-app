import "./Nav.css";
import logo from "../../../images/chatify-logo.png";
import { useSelector } from "react-redux";

const Nav = ({ setTab }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="Nav">
      <div className="Nav-left">
        <img src={logo} alt="Logo"></img>
        <h3>ChatApp</h3>
      </div>
      <div className="Nav-right">
        <ul>
          <li onClick={() => setTab("home")}>Home</li>
          <li onClick={() => setTab("contacts")}>Contacts</li>
          <img
            onClick={() => setTab("profile")}
            src={user.profilePicture}
            alt="Profile"
          ></img>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
