import "./Nav.css";
import logo from "../../../images/chatify-logo.png";

const Nav = ({ setTab }) => {
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
            src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
            alt="Profile"
          ></img>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
