import "./FriendRequests.css";
import FriendRequestsCard from "./FriendRequestsCard";

const FriendRequests = () => {
  return (
    <div className="FriendRequests">
      <h3>Friend Requests</h3>
      <div className="FriendRequests-body">
        <FriendRequestsCard />
        <FriendRequestsCard />
        <FriendRequestsCard />
        <FriendRequestsCard />
        <FriendRequestsCard />
        <FriendRequestsCard />
      </div>
    </div>
  );
};

export default FriendRequests;
