import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function OnlyPersonalInfo() {
  // hooks
  const { loggedInUser, users, updateAllUsers } = useUsers();
  // state - input
  const [surnameEditing, setSurnameEditing] = useState(null);
  const [surnameEditingText, setSurnameEditingText] = useState(
    loggedInUser.surname
  );

  const [fixed, setFixed] = useState({});

  useEffect(() => {
    let imutableData = JSON.parse(JSON.stringify(loggedInUser));
    setFixed(imutableData);
    console.log(imutableData);
  }, []);

  console.log(fixed);

  const [nameEditing, setNameEditing] = useState(null);
  const [nameEditingText, setNameEditingText] = useState(loggedInUser.name);

  let newAction = {
    id: new Date().getTime(),
    what: "",
    when: new Date().toString().slice(0, 24),
    oldData: "",
    change: "",
  };

  // helper function
  // edit SURNAME function
  function editSurname() {
    loggedInUser.surname = surnameEditingText;

    loggedInUser.actions.push({
      ...newAction,
      what: "edited SURNAME",
      oldData: fixed.surname,
      change: surnameEditingText,
    });

    setSurnameEditing(null);
    setSurnameEditingText("");

    updateAllUsers(loggedInUser);

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editName() {
    loggedInUser.name = nameEditingText;

    loggedInUser.actions.push({
      ...newAction,
      what: "edited NAME",
      oldData: fixed.name,
      change: nameEditingText,
    });

    setNameEditing(null);
    setNameEditingText("");

    updateAllUsers(loggedInUser);

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  return (
    <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      <h1>OnlyPersonalInfo.js - Only Personal Info</h1>
      <h2>Data added at Register</h2>
      <p>ID: {loggedInUser.id}</p>

      {nameEditing ? (
        <div>
          <input
            type="text"
            onChange={(e) => setNameEditingText(e.target.value)}
            value={nameEditingText}
          />
          <button onClick={() => editName(loggedInUser.name)}>
            Submit Edit
          </button>
        </div>
      ) : (
        <div>
          <p>NAME: {loggedInUser.name}</p>
          <button onClick={() => setNameEditing(loggedInUser.name)}>
            Edit Name
          </button>
        </div>
      )}

      <p>EMAIL: {loggedInUser.email}</p>
      <p>PASSWORD: {loggedInUser.password}</p>
      <h2>Data added at AddPersonalInfo</h2>

      {surnameEditing ? (
        <div>
          <input
            type="text"
            onChange={(e) => setSurnameEditingText(e.target.value)}
            value={surnameEditingText}
          />
          <button onClick={() => editSurname(loggedInUser.surname)}>
            Submit Edit
          </button>
        </div>
      ) : (
        <div>
          <p>{loggedInUser.surname}</p>
          <button onClick={() => setSurnameEditing(loggedInUser.surname)}>
            Edit Surname
          </button>
        </div>
      )}

      <div style={{ border: "1px solid green" }}>
        <p>{loggedInUser.address.street}</p>
        <p>{loggedInUser.address.number}</p>
        <p>{loggedInUser.address.postNr}</p>
        <p>{loggedInUser.address.city}</p>
        <p>{loggedInUser.address.country}</p>
      </div>
      <p>{loggedInUser.birthDay}</p>
      <p>{loggedInUser.gender}</p>
      <div style={{ border: "1px solid grey" }}>
        {loggedInUser.actions.map((action, i) => {
          return (
            <div key={i} style={{ border: "1px solid pink" }}>
              <p>{action.id}</p>
              <p>{action.what}</p>
              <p>{action.when}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
