import "./Profile.css";
import { useSpring, animated } from "react-spring";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logOutUser } from "../../../redux/actions/user";
import { useEffect, useState } from "react";
import { updateUserRequest } from "../../../api/users";
import convertBase64 from "../../../utils/base64";

import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://localhost:8000/";

const Profile = ({ setTab }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  // state that holds profilePicture to be used in update photo, created this state to show photo that is being uploaded for sent to backend using base64
  const [uploadProfilePic, setUploadProfilePic] = useState(user.profilePicture);

  const [profileData, setProfileData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    profilePicture: user.profilePicture,
  });

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    // state will show chosen photo using base 64 function
    if (type === "file") {
      await convertBase64(files[0]).then((res) => {
        setUploadProfilePic(res);
      });
    }

    setProfileData((prev) => {
      return {
        ...prev,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("firstName", profileData.firstName);
    data.append("lastName", profileData.lastName);
    data.append("profilePicture", profileData.profilePicture);

    await updateUserRequest(user.id, data)
      .then(() => {
        dispatch(loadUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    dispatch(logOutUser());

    socket.emit("logOut", (users) => console.log(users));
  };

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

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
          <h2>
            {user.firstName}&#160;
            {user.lastName}
          </h2>
          <img src={`${user.profilePicture}`} alt="Profile" />
          <h3>User Id</h3>
          <p>{user.id}</p>
          <ul className="edit-profile">
            <li className="edit-name">
              <p>First name</p>
              <input
                onChange={handleChange}
                name="firstName"
                type="text"
                defaultValue={`${user.firstName}`}
              />
              <p>Last name</p>
              <input
                onChange={handleChange}
                name="lastName"
                type="text"
                defaultValue={`${user.lastName}`}
              />
            </li>
            <li className="edit-photo">
              <label htmlFor="picture">
                Update Photo
                <img src={uploadProfilePic} alt="Profile" />
                <input
                  onChange={handleChange}
                  name="profilePicture"
                  id="picture"
                  type="file"
                ></input>
              </label>
            </li>
            <button onClick={handleSubmit}>Edit Profile</button>
          </ul>

          <button
            onClick={handleLogout}
            title="log out"
            className="log-out-button"
          >
            Log Out
          </button>
        </div>
      </animated.div>
    </div>
  );
};
export default Profile;
