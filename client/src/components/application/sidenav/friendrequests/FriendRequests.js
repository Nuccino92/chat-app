import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPendingContactsRequest } from "../../../../api/contact";
import "./FriendRequests.css";
import FriendRequestsCard from "./FriendRequestsCard";

const FriendRequests = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [receivedRequest, setRecievedRequest] = useState([]);

  useEffect(() => {
    getPendingContactsRequest(user.id).then((res) => {
      res.data.forEach((contact) => {
        contact.userID2 === user.id &&
          setRecievedRequest((prev) => {
            return [...prev, contact];
          });
      });
    });
  }, [user.id]);

  return (
    <div className="FriendRequests">
      <h3>Friend Requests</h3>
      <div className="FriendRequests-body">
        {receivedRequest.map((request, index) => {
          return <FriendRequestsCard request={request} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FriendRequests;
