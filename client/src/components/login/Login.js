import "./Login.css";
import chatifyLogo from "../../images/chatify-logo.png";
import talkPhoto from "../../images/talk.png";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

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
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <button onClick={handleSubmit}>Log in</button>
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
