import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function AddPersonalInfo() {
  // history
  let history = useHistory();
  // hooks
  const {
    users,
    loggedInUser,
    extandUserInfoInUsers,
    extandUserInfoInLoggedInUser,
  } = useUsers();
  // states - input
  const [surnamee, setSurnamee] = useState("");
  const [streett, setStreett] = useState("");
  const [numberr, setNumberr] = useState("");
  const [postNrr, setPostNrr] = useState("");
  const [cityy, setCityy] = useState("");
  const [countryy, setCountryy] = useState("");
  const [birthDayy, setBirthDayy] = useState("");
  const [genderr, setGenderr] = useState("");
  // FUNCTIONS
  // inputs function - handler
  const updateSurnamee = (e) => {
    setSurnamee(e.target.value);
  };
  const updateStreett = (e) => {
    setStreett(e.target.value);
  };
  const updateNumberr = (e) => {
    setNumberr(e.target.value);
  };
  const updatePostNrr = (e) => {
    setPostNrr(e.target.value);
  };
  const updateCityy = (e) => {
    setCityy(e.target.value);
  };
  const updateCountryy = (e) => {
    setCountryy(e.target.value);
  };
  const updateBirthDayy = (e) => {
    setBirthDayy(e.target.value);
  };
  const updateGenderr = (e) => {
    setGenderr(e.target.value);
  };
  // helper function
  const updatedUser = {
    ...loggedInUser,
    surname: surnamee,
    address: {
      street: streett,
      number: numberr,
      postNr: postNrr,
      city: cityy,
      country: countryy,
    },
    birthDay: birthDayy,
    gender: genderr,
    actions: [{ what: "added personal info", when: "2.1.2008" }],
    exams: []
  };

  const updatedUsers = users.map((user) => {
    if (user.id === loggedInUser.id) {
      return updatedUser;
    }
    return user;
  });
  // main function - submit
  const addMyPersonalInfo = (e) => {
    e.preventDefault();
    extandUserInfoInUsers(updatedUsers);
    extandUserInfoInLoggedInUser(updatedUser);

    setSurnamee("");
    setStreett("");
    setNumberr("");
    setPostNrr("");
    setCityy("");
    setCountryy("");
    setBirthDayy("");
    setGenderr("");

    console.log(users[loggedInUser.id - 1]);
    console.log(loggedInUser);

    history.push("/home");
  };

  return (
    <div>
      <div>
        <p>{loggedInUser.id}</p>
        <p>{loggedInUser.name}</p>
        <p>{loggedInUser.email}</p>
        <p>{loggedInUser.password}</p>
      </div>
      <h2>AddPersonalInfo</h2>
      <form
        onSubmit={addMyPersonalInfo}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Surname: </label>
        <input
          onChange={updateSurnamee}
          type="text"
          name="surnamee"
          value={surnamee}
          placeholder="Enter surname"
          required
        />
        <label>Street: </label>
        <input
          onChange={updateStreett}
          type="text"
          name="streett"
          value={streett}
          placeholder="Enter street"
          required
        />
        <label>Number: </label>
        <input
          onChange={updateNumberr}
          type="number"
          name="numberr"
          value={numberr}
          placeholder="Enter number"
          required
        />
        <label>Post number: </label>
        <input
          onChange={updatePostNrr}
          type="text"
          name="postNrr"
          value={postNrr}
          placeholder="Enter post number"
          required
        />
        <label>City: </label>
        <input
          onChange={updateCityy}
          type="text"
          name="cityy"
          value={cityy}
          placeholder="Enter city"
          required
        />
        <label>Country: </label>
        <input
          onChange={updateCountryy}
          type="text"
          name="countryy"
          value={countryy}
          placeholder="Enter country"
          required
        />
        <label>Birth day: </label>
        <input
          onChange={updateBirthDayy}
          type="text"
          name="birthDayy"
          value={birthDayy}
          placeholder="Enter birth day"
          required
        />
        <label>Gender: </label>
        <input
          onChange={updateGenderr}
          type="text"
          name="genderr"
          value={genderr}
          placeholder="Enter gender"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
