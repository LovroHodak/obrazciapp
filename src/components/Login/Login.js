import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { useUsers } from "../../hooks/use-users";

export default function Login() {
  let history = useHistory();
  const { users, loggedInUser, setLoggedInUser } = useUsers();

  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");

  const [warningUserDoesntExist, setWarningUserDoesntExist] = useState(false);
  const [warningPassword, setWarningPassword] = useState(false);

  const updateEmaill = (e) => {
    setEmaill(e.target.value);
  };

  const updatePasswordd = (e) => {
    setPasswordd(e.target.value);
  };

  const checkLogin = (e) => {
    e.preventDefault();

    const correctMailPass = users.find(
      (user) => user.email === emaill && user.password === passwordd
    );
    const correctMailWrongPass = users.find(
      (user) => user.email === emaill && user.password !== passwordd
    );

    if (correctMailWrongPass) {
      console.log("Correct email, wrong password");
      setWarningPassword(true);
      setWarningUserDoesntExist(false);
      setPasswordd("");
    }
    if (!correctMailPass && !correctMailWrongPass) {
      console.log("User doesnt exists. Go to register.");
      setWarningUserDoesntExist(true);
      setWarningPassword(false);
      setEmaill("");
      setPasswordd("");
    }

    // correct
    if (correctMailPass) {
      console.log("Welcome back " + correctMailPass.email);
      setLoggedInUser(correctMailPass);
      console.log(correctMailPass);
      setEmaill("");
      setPasswordd("");
      history.push("/home");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={checkLogin} className="loginForm">
        <label>Email:</label>
        <input
          onChange={updateEmaill}
          type="email"
          name="emaill"
          value={emaill}
          placeholder="Enter email"
          required
        />
        <label>Password:</label>
        <input
          onChange={updatePasswordd}
          type="password"
          name="passwordd"
          value={passwordd}
          placeholder="Enter password"
          required
        />
        <button type="submit">Submit</button>
        {warningPassword ? (
          <h4 style={{ color: "red" }}>Wrong password!</h4>
        ) : (
          <></>
        )}
        {warningUserDoesntExist ? (
          <h4 style={{ color: "red" }}>User doesnt exist!</h4>
        ) : (
          <></>
        )}
      </form>
      <div>
        <Link to="/register">
          <button variant="danger">Go to register</button>
        </Link>
      </div>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.id}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
