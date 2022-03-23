import "./Register.css";
import usingComputer from "../../images/register.png";
import chatifyLogo from "../../images/chatify-logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/user";
import FormError from "../formError/FormError";
import { clearErrors } from "../../redux/actions/error";

const Register = () => {
  const dispatch = useDispatch();
  const { message, param, id } = useSelector((state) => state.errorReducer);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePicture:
      "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    dispatch(clearErrors());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));

    if (message) {
      setError(true);
    }
  };

  useEffect(() => {
    if (message) {
      setError(true);
    }
  }, [message]);

  //clear errors on mount
  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  return (
    <div className="Register">
      <div className="Register-left">
        <h1>Chat Now</h1>
        <p>Connect and chat with your friends in real time!</p>
        <img src={usingComputer} alt="Sitting at the computer"></img>
      </div>
      <div className="Register-right">
        <h1>Register</h1>
        <form>
          <div>
            <div
              className="name-input-container"
              style={{ marginRight: "10px" }}
            >
              <label htmlFor="firstName" style={{ marginBottom: "7px" }}>
                First Name
              </label>
              <input onChange={handleChange} name="firstName" type="text" />
            </div>
            <div className="name-input-container">
              <label htmlFor="lastName" style={{ marginBottom: "7px" }}>
                Last Name
              </label>
              <input onChange={handleChange} name="lastName" type="text" />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="example@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="must be at least 6 characters"
          />
          {error && <FormError message={message} location={"register"} />}
          <button onClick={handleSubmit}>Create Account</button>
        </form>
        <img src={chatifyLogo} alt="chat app logo"></img>
        <div className="register-form-login">
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
