import "./Nav.css";
import logo from "../../../images/chatify-logo.png";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-left">
        <img src={logo} alt="Logo"></img>
        <h3>ChatApp</h3>
      </div>
      <div className="Nav-right">
        <ul>
          <li>Home</li>
          <li>Contacts</li>
          <li>Groups</li>
          <img
            src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
            alt="Profile"
          ></img>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
