import "./FormError.css";

const FormError = ({ message, location }) => {
  return (
    <div
      style={
        location === "register"
          ? { marginBottom: "59px" }
          : location === "logIn"
          ? { marginBottom: "186px" }
          : location === "contact"
          ? { position: "relative", margin: "10px 0 0" }
          : null
      }
      className="FormError"
    >
      {message}
    </div>
  );
};

export default FormError;
