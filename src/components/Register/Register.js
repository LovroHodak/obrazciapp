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
  const [namee, setNamee] = useState("");
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  // 2) states
  const [warningEmail, setWarningEmail] = useState(false);
  const [warningName, setWarningName] = useState(false);

  // FUNCTIONS
  // inputs function - handler
  const updateNamee = (e) => {
    setNamee(e.target.value);
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
    name: namee,
    email: emaill,
    password: passwordd,
  };
  // helper function
  const registerStatus = () => {
    const emailAlreadyExists = users.find((user) => user.email === emaill);
    const nameAlreadyExists = users.find(
      (user) => user.name === namee
    );

    if (emailAlreadyExists) {
      setWarningEmail(true);
      setWarningName(false);
      setEmaill("");
    } else if (nameAlreadyExists) {
      setWarningEmail(false);
      setWarningName(true);
      setNamee("");
    } else if (emailAlreadyExists && nameAlreadyExists) {
      setWarningEmail(true);
      setWarningName(true);
      setEmaill("");
      setNamee("");
    } else {
      addNewUser(newUser);
      setNamee("");
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
        <label>Name:</label>
        <input
          onChange={updateNamee}
          type="text"
          name="namee"
          value={namee}
          placeholder="Enter name"
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
        {warningName ? (
          <h4 style={{ color: "red" }}>Name already exist!</h4>
        ) : (
          <></>
        )}
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
