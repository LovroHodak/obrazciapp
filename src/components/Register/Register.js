import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Register.css";
import { useUsers } from "../../hooks/use-users";

export default function Register() {
  // history
  let history = useHistory();
  // hooks
  const { users, addNewUser } = useUsers();
  // 1) states - input
  const [usernamee, setUsernamee] = useState("");
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  // 2) states
  const [warningEmail, setWarningEmail] = useState(false);
  const [warningUsername, setWarningUsername] = useState(false);

  // FUNCTIONS
  // inputs function - handler
  const updateUsernamee = (e) => {
    setUsernamee(e.target.value);
  };
  const updateEmaill = (e) => {
    setEmaill(e.target.value);
  };
  const updatePasswordd = (e) => {
    setPasswordd(e.target.value);
  };
  // on spot - new obj
  const newUser = {
    id: users.length + 1,
    username: usernamee,
    email: emaill,
    password: passwordd,
  };
  // helper function
  const registerStatus = () => {
    const emailAlreadyExists = users.find((user) => user.email === emaill);
    const usernameAlreadyExists = users.find(
      (user) => user.username === usernamee
    );

    if (emailAlreadyExists) {
      setWarningEmail(true);
      setWarningUsername(false);
      setEmaill("");
    } else if (usernameAlreadyExists) {
      setWarningEmail(false);
      setWarningUsername(true);
      setUsernamee("");
    } else if (emailAlreadyExists && usernameAlreadyExists) {
      setWarningEmail(true);
      setWarningUsername(true);
      setEmaill("");
      setUsernamee("");
    } else {
      addNewUser(newUser);
      setUsernamee("");
      setEmaill("");
      setPasswordd("");
      history.push("/");
    }
  };
  // main function - submit
  const addUser = (e) => {
    e.preventDefault();
    registerStatus();
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={addUser} className="registerForm">
        <label>Username:</label>
        <input
          onChange={updateUsernamee}
          type="text"
          name="usernamee"
          value={usernamee}
          placeholder="Enter username"
          required
        />
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
        {warningEmail ? (
          <h4 style={{ color: "red" }}>Email already exists!</h4>
        ) : (
          <></>
        )}
        {warningUsername ? (
          <h4 style={{ color: "red" }}>Username already exist!</h4>
        ) : (
          <></>
        )}
      </form>
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
