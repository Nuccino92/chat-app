import "./Sidenav.css";
import { BiSearchAlt2 } from "react-icons/bi";
import MessageDisplay from "./messagedisplay/MessageDisplay";
import FriendRequests from "./friendrequests/FriendRequests";

const Sidenav = () => {
  return (
    <div className="Sidenav">
      <div className="Sidenav-searchbar-container">
        <BiSearchAlt2 size={25} />
        <input type="text" placeholder="search" />
      </div>
      <MessageDisplay />
      <FriendRequests />
    </div>
  );
};

export default Sidenav;
