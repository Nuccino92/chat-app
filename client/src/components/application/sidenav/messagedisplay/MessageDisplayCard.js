import { useEffect, useState } from "react";
import { getUserRequest } from "../../../../api/users";
import { useDispatch } from "react-redux";
import { getConversation } from "../../../../redux/actions/chat";
import { GET_PARTICIPANT } from "../../../../redux/actions/types";

const MessageDisplayCard = ({ conversation, id }) => {
  const dispatch = useDispatch();

  const { userID1, userID2 } = conversation;

  const [user2Info, setUser2Info] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    dispatch(getConversation(userID1, userID2));
    dispatch({ type: GET_PARTICIPANT, payload: user2Info });
  };

  useEffect(() => {
    const getUser = async (id) => {
      await getUserRequest(id).then((res) => {
        setUser2Info(res.data);
        setLoading(false);
      });
    };

    if (userID1 !== id) {
      getUser(userID1);
    }
    if (userID2 !== id) {
      getUser(userID2);
    }
  }, [setLoading, setUser2Info, id, userID1, userID2]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="MessageDisplayCard" onClick={handleClick}>
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
