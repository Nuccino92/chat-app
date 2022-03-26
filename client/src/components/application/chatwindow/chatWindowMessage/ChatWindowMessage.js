import { useEffect, useState } from "react";
import { getUserRequest } from "../../../../api/users";
import moment from "moment";
import "./ChatWindowMessage.css";

const ChatWindowMessage = ({ info, myMessage }) => {
  const { content, createdAt, senderID } = info;

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      await getUserRequest(senderID).then((res) => {
        setUserData(res.data);
        setLoading(false);
      });
    };
    getUserInfo();
  }, [senderID]);

  return (
    <>
      {loading ? (
        <></>
      ) : myMessage ? (
        <div className="ChatWindowMessage message-sent">
          <div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              {moment(new Date(createdAt)).fromNow()}
            </span>
            <p>{content} </p>
          </div>
        </div>
      ) : (
        <div className="ChatWindowMessage message-received">
          <img src={userData.profilePicture} alt="Profile"></img>
          <div>
            <span>
              {userData.firstName} {userData.lastName}
            </span>
            &#160;
            <span
              style={{
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              {moment(new Date(createdAt)).fromNow()}
            </span>
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindowMessage;
