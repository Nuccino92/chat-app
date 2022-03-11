import "./Register.css";
import usingComputer from "../../images/register.png";
import chatifyLogo from "../../images/chatify-logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("created");
  };

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
              <label htmlFor="firstname" style={{ marginBottom: "7px" }}>
                First Name
              </label>
              <input name="firstname" type="text" />
            </div>
            <div className="name-input-container">
              <label htmlFor="lastname" style={{ marginBottom: "7px" }}>
                Last Name
              </label>
              <input name="lastname" type="text" />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input name="email" type="text" placeholder="example@example.com" />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="must be at least 6 characters"
          />
          <button onClick={handleClick}>Create Account</button>
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
