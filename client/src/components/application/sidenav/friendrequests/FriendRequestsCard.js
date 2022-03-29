import { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  acceptContactRequest,
  deleteContactRequest,
} from "../../../../api/contact";
import { startConversationRequest } from "../../../../api/conversation";
import { getUserRequest } from "../../../../api/users";

const FriendRequestsCard = ({ request }) => {
  const { userID1, userID2, id } = request;

  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      await getUserRequest(userID1).then((res) => {
        setUserInfo(res.data);
        setLoading(false);
      });
    };
    setLoading(true);
    getUser();
  }, [userID1]);

  const handleAccept = async () => {
    await acceptContactRequest(id).then(async () => {
      await startConversationRequest(userID1, userID2);
      setChosen(true);
    });
  };

  const handleDecline = async () => {
    await deleteContactRequest(userID1, userID2).then(() => {
      setChosen(true);
    });
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div
          className={
            chosen ? "FriendRequestsCard chosen" : "FriendRequestsCard"
          }
        >
          <div>
            <img src={userInfo.profilePicture} alt="Contact" />
            <h4>
              {userInfo.firstName} {userInfo.lastName}
            </h4>
          </div>

          <div>
            <FcCheckmark
              size={27}
              style={{ marginRight: "6px" }}
              onClick={handleAccept}
            />
            <IoMdClose size={27} color={"red"} onClick={handleDecline} />
          </div>
        </div>
      )}
    </>
  );
};

export default FriendRequestsCard;
