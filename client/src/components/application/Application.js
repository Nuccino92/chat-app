import { useState } from "react";
import "./Application.css";
import ChatWindow from "./chatwindow/ChatWindow";
import Contacts from "./contacts/Contacts";
import Nav from "./nav/Nav";
import Profile from "./profile/Profile";
import Sidenav from "./sidenav/Sidenav";

const Application = () => {
  const [tab, setTab] = useState("home");

  return (
    <div className="Application">
      {tab === "home" && (
        <>
          {" "}
          <Nav setTab={setTab} />
          <div className="Application-body">
            <Sidenav />
            <ChatWindow />
          </div>
        </>
      )}
      {tab === "contacts" && <Contacts setTab={setTab} />}
      {tab === "profile" && <Profile setTab={setTab} />}
    </div>
  );
};

export default Application;
