import { FcCheckmark } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const FriendRequestsCard = () => {
  return (
    <div className="FriendRequestsCard">
      <div>
        <img
          src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
          alt="Contact"
        />
        <h4>Collin Jefferson</h4>
      </div>

      <div>
        <FcCheckmark size={27} style={{ marginRight: "6px" }} />
        <IoMdClose size={27} color={"red"} />
      </div>
    </div>
  );
};

export default FriendRequestsCard;
