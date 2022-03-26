import "./Sidenav.css";
import { BiSearchAlt2 } from "react-icons/bi";
import MessageDisplay from "./messagedisplay/MessageDisplay";
import FriendRequests from "./friendrequests/FriendRequests";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserConversations } from "../../../api/conversation";
import { getUserRequest } from "../../../api/users";

const Sidenav = () => {
  const { user } = useSelector((state) => state.userReducer);

  const [users, setUsers] = useState([]);
  const [filteredData, setFitleredData] = useState([]);

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
    const getConversations = async () => {
      await getUserConversations(user.id).then((res) => {
        res.data.forEach(async (e) => {
          let id = e.userID1 !== user.id ? e.userID1 : e.userID2;

          await getUserRequest(id).then((res) => {
            setUsers((prev) => {
              return [...prev, res.data];
            });

            setFitleredData((prev) => {
              return [...prev, res.data];
            });
          });
        });
      });
    };
    getConversations();
  }, [user.id]);

  return (
    <div className="Sidenav">
      <div className="Sidenav-searchbar-container">
        <BiSearchAlt2 size={25} />
        <input type="text" placeholder="find chat" onChange={handleFilter} />
      </div>
      <MessageDisplay filteredData={filteredData} />
      <FriendRequests />
    </div>
  );
};

export default Sidenav;
