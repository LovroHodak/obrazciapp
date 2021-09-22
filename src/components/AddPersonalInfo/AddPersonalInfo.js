import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Card, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function AddPersonalInfo() {
  // history
  let history = useHistory();
  // hooks
  const {
    loggedInUser,
    updateAllUsers,
    updateLoggedInUser,
    personalInfoOnce,
    updatePersonalInfoOnce,
  } = useUsers();

  // STATES
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
  // helper functions
  // (for state - loggedInUser)
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
    actions: [
      {
        id: new Date().getTime(),
        what: "Added personal info",
        when: new Date().toString().slice(0, 24),

        /* name: 'empty',
        grade: 'empty',
        change: {first: 'empty', second: 'empty'},
        oldData: {first: 'empty', second: 'empty'},
        propNames: {first: 'empty', second: 'empty'} */
      },
    ],
    exams: [],
  };
  // (for state - personalInfoData)
  const updatedUserOnce = {
    ...personalInfoOnce,
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
    actions: [
      {
        id: new Date().getTime(),
        what: "Added personal info",
        when: new Date().toString().slice(0, 24),
      
        /* name: 'empty',
        grade: 'empty',
        change: {first: 'empty', second: 'empty'},
        oldData: {first: 'empty', second: 'empty'},
        propNames: {first: 'empty', second: 'empty'} */
      },
    ],
    exams: [],
  };
  // main function - submit
  const addMyPersonalInfo = (e) => {
    e.preventDefault();

    updateAllUsers(updatedUser);
    updateLoggedInUser(updatedUser);
    updatePersonalInfoOnce(updatedUserOnce);

    setSurnamee("");
    setStreett("");
    setNumberr("");
    setPostNrr("");
    setCityy("");
    setCountryy("");
    setBirthDayy("");
    setGenderr("");

    console.log(updatedUser);
    history.push("/home");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-1">
      <h2>Data added at Register</h2>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>ID: {loggedInUser.id}</ListGroup.Item>
          <ListGroup.Item>Name: {loggedInUser.name}</ListGroup.Item>
          <ListGroup.Item>Email: {loggedInUser.email}</ListGroup.Item>
          <ListGroup.Item>Password: {loggedInUser.password}</ListGroup.Item>
        </ListGroup>
      </Card>
      <h2>Add Personal Data</h2>
      <Form onSubmit={addMyPersonalInfo} style={{ maxWidth: 500 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Surname: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter surname"
            onChange={updateSurnamee}
            name="surnamee"
            value={surnamee}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Street: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter street"
            onChange={updateStreett}
            name="streett"
            value={streett}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Number: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            onChange={updateNumberr}
            name="numbertr"
            value={numberr}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Post number: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post number"
            onChange={updatePostNrr}
            name="postNrr"
            value={postNrr}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>City: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={updateCityy}
            name="cityy"
            value={cityy}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Country: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            onChange={updateCountryy}
            name="countryy"
            value={countryy}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Birth day: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter date of birth"
            onChange={updateBirthDayy}
            name="birthDayy"
            value={birthDayy}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Gender: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter gender"
            onChange={updateGenderr}
            name="genderr"
            value={genderr}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-1">
          Submit
        </Button>
      </Form>
    </div>
  );
}
