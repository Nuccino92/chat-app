import "./Application.css";
import ChatWindow from "./chatwindow/ChatWindow";
import Nav from "./nav/Nav";
import Sidenav from "./sidenav/Sidenav";

const Application = () => {
  return (
    <div className="Application">
      <Nav></Nav>
      <div className="Application-body">
        <Sidenav />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Application;
