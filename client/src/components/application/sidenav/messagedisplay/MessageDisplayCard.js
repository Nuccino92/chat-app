import { useEffect, useState } from "react";
import { getUserRequest } from "../../../../api/users";

const MessageDisplayCard = ({ conversation, id }) => {
  const [user2Info, setUser2Info] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async (id) => {
      await getUserRequest(id).then((res) => {
        setUser2Info(res.data);
        setLoading(false);
      });
    };

    if (conversation.userID1 !== id) {
      getUser(conversation.userID1);
    }
    if (conversation.userID2 !== id) {
      getUser(conversation.userID2);
    }
  }, [conversation, setLoading, setUser2Info, id]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="MessageDisplayCard">
          <img src={user2Info.profilePicture} alt="Contact" />
          <div>
            <h4>
              {user2Info.firstName} {user2Info.lastName}
            </h4>
            <p>I NEED TO GET THE MESSAGES FOR THIS THING TO WORK</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageDisplayCard;
