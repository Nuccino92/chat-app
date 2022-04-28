import "./Login.css";
import chatifyLogo from "../../images/chatify-logo.png";
import talkPhoto from "../../images/talk.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormError from "../formError/FormError";
import { clearErrors } from "../../redux/actions/error";
import { logInUser } from "../../redux/actions/user";

const Login = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.errorReducer);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(userData));

    if (message) {
      setError(true);
    }
  };

  const handleGuestAccount = (e) => {
    // data for guest account
    const guestAccountData = {
      email: "guestaccount@gmail.com",
      password: "password123",
    };

    e.preventDefault();
    dispatch(logInUser(guestAccountData));
  };

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
    <div className="Login">
      <div className="Login-left">
        <h1>Chat Now</h1>
        <p>Connect and chat with your friends in real time!</p>
        <img src={talkPhoto} alt="People Connecting"></img>
      </div>
      <div className="Login-right">
        <img src={chatifyLogo} alt="Chatify Logo"></img>
        <h1>ChatApp</h1>
        <form>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="email"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <button className="guest-account-btn" onClick={handleGuestAccount}>
            Use guest account
          </button>
          <button className="login-btn" onClick={handleSubmit}>
            Log in
          </button>
          {error && <FormError message={message} location={"logIn"} />}
        </form>

        <div className="login-form-signup">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
