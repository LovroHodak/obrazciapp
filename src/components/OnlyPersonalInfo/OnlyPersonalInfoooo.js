import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

function validateForm(form, validation) {
  return !Object.entries(validation).some(
    ([key, validationFunction]) => !validationFunction(form[key])
  );
}

function getFailingFields(form, validation) {
  return Object.fromEntries(
    Object.entries(validation).map(([key, validationFunction]) => [
      key,
      validationFunction(form[key]),
    ])
  );
}

function useForm(initialValue, validation) {
  const [state, setState] = React.useState(initialValue ?? {});
  const onChange = (propertyName) => {
    return (event) => {
      setState({ ...state, [propertyName]: event.target.value });
    };
  };

  console.log(validation);

  const isFormValid = validateForm(state, validation);
  console.log(isFormValid);

  const failingFields = getFailingFields(state, validation);
  console.log(failingFields);
  return { form: state, onChange, isFormValid };
}

export default function OnlyPersonalInfoooo() {
  // hooks
  const { loggedInUser, users, extandUserInfoInUsers } = useUsers();
  // state - input
  const [surnameEditing, setSurnameEditing] = useState(null);
  const [surnameEditingText, setSurnameEditingText] = useState(
    loggedInUser.surname
  );
  const { form, onChange, isFormValid } = useForm(loggedInUser, {
    name: (value) => value.length > 3,
    surname: (value) => value.length > 4,
  });
  // helper function
  const updatedUsers = users.map((user) => {
    if (user.id === loggedInUser.id) {
      return loggedInUser;
    }
    return user;
  });
  // edit SURNAME function
  function editSurname() {
    /* personalInfoData.surname = surnameEditingText; */
    loggedInUser.surname = surnameEditingText;

    /* personalInfoData.actions.push({
      id: new Date().getTime(),
      what: "edited SURNAME",
      when: new Date().toString().slice(0, 24),
    }); */
    loggedInUser.actions.push({
      id: new Date().getTime(),
      what: "edited SURNAME",
      when: new Date().toString().slice(0, 24),
    });

    extandUserInfoInUsers(updatedUsers);
    setSurnameEditing(null);
    setSurnameEditingText("");

    /* console.log("pers", personalInfoData); */
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
      <p>NAME: {loggedInUser.name}</p>
      <p>EMAIL: {loggedInUser.email}</p>
      <p>PASSWORD: {loggedInUser.password}</p>
      <h2>Data added at AddPersonalInfo</h2>

      {surnameEditing ? (
        <div>
          <input
            type="text"
            onChange={onChange("surname")}
            value={form.surname}
          />
          {/* <input type="text" onChange={onChange("name")} value={form.name} /> */}
          <button
            disabled={!isFormValid}
            onClick={() => editSurname(loggedInUser.surname)}
          >
            Submit Edits
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
