import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  let user = {};
  const LoginFormHandler = (event) => {
    event.preventDefault();
    const data = {
      user: {
        email: enteredEmail,
        password: enteredPassword,
      },
    };
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={classes.logindiv}>
      <form onSubmit={LoginFormHandler} className={classes.form}>
        <h1 className={classes.signin}>Sign in</h1>
        <Link className={classes.link} to="/signup">
          Need an account?
        </Link>
        <input
          onChange={emailInputHandler}
          className={classes.inputlog}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={passwordInputHandler}
          className={classes.inputlog}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className={classes.btnlogin}>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
