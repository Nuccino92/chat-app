import "./Profile.css";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";

const Profile = ({ setTab }) => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <div className="Profile">
      <animated.div style={style}>
        <header>
          <h1>Profile</h1>
          <MdOutlineClose
            style={{ cursor: "pointer" }}
            size={30}
            onClick={() => setTab("home")}
          />
        </header>
        <div className="Profile-body">
          <h2>Anthony Nucci</h2>
          <img
            src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
            alt="Profile"
          />
          <h3>User Id</h3>
          <p>#353454745664</p>
          <ul className="edit-profile">
            <li className="edit-name">
              <p>First name</p>
              <input type="text" defaultValue={"Anthony"} />
              <p>Last name</p>
              <input type="text" defaultValue={"Nucci"} />
            </li>
            <li className="edit-photo">
              <label htmlFor="picture">
                {" "}
                Update Photo
                <img
                  src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
                  alt="Profile"
                />
                <input id="picture" name="profilePicture" type="file"></input>
              </label>
            </li>
            <button>Edit Profile</button>
          </ul>

          <button title="log out" className="log-out-button">
            Log Out
          </button>
        </div>
      </animated.div>
    </div>
  );
};
export default Profile;
