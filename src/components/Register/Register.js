import React, { useState } from "react";
import "./Register.css";
import { useUsers } from "../../hooks/use-users";
import { useHistory } from "react-router-dom";

export default function Register() {
  let history = useHistory();

  const { users, setUsers } = useUsers();

  const [usernamee, setUsernamee] = useState("");
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");

  const [warningEmail, setWarningEmail] = useState(false);
  const [warningUsername, setWarningUsername] = useState(false);

  const updateUsernamee = (e) => {
    setUsernamee(e.target.value);
  };

  const updateEmaill = (e) => {
    setEmaill(e.target.value);
  };

  const updatePasswordd = (e) => {
    setPasswordd(e.target.value);
  };

  const newUser = {
    id: users.length + 1,
    username: usernamee,
    email: emaill,
    password: passwordd,
  };

  const addUser = (e) => {
    e.preventDefault();

    const emailAlreadyExists = users.find((user) => user.email === emaill);
    const usernameAlreadyExists = users.find(
      (user) => user.username === usernamee
    );

    if (emailAlreadyExists) {
      console.log("Email already exists!");
      setWarningEmail(true);
      setWarningUsername(false);
      setEmaill("");
    }
    if (usernameAlreadyExists) {
      console.log("Username already exists!");
      setWarningEmail(false);
      setWarningUsername(true);
      setUsernamee("");
    }
    if (emailAlreadyExists && usernameAlreadyExists) {
      setWarningEmail(true);
      setWarningUsername(true);
      setEmaill("");
      setUsernamee("");
    } else {
      // correct
      setUsers([...users].concat(newUser));
      setUsernamee("");
      setEmaill("");
      setPasswordd("");
      history.push("/");
    }
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
