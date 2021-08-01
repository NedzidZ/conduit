import { react, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

const Signup = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const usernameInputHandler = (event) =>
    setEnteredUsername(event.target.value);

  const emailInputHandler = (event) => setEnteredEmail(event.target.value);

  const passwordInputHandler = (event) =>
    setEnteredPassword(event.target.value);

  const SignupFormHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      user: {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      },
    };

    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={classes.signupdiv}>
      <form onSubmit={SignupFormHandler} className={classes.form}>
        <h1 className={classes.signup}>Sign up</h1>
        <Link className={classes.link} to="/login">
          Have an account?
        </Link>
        <input
          onChange={usernameInputHandler}
          className={classes.inputsignup}
          type="text"
          id="username"
          name="usrename"
          placeholder="Username"
        />
        <input
          onChange={emailInputHandler}
          className={classes.inputsignup}
          type="text"
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={passwordInputHandler}
          className={classes.inputsignup}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button onClick={SignupFormHandler} className={classes.btnsignup}>
          Sign up
        </button>
      </form>
    </div>
  );
};
export default Signup;
