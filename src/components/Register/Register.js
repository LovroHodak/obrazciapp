import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

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
  const [borderColorUsername, setBorderColorUsername] = useState(
    "border border-primary"
  );
  const [borderColorEmail, setBorderColorEmail] = useState("border border-primary");
  const [warningUsername, setWarningUsername] = useState(
    false
  );
  const [warningEmail, setWarningEmail] = useState(false);

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

    if (emailAlreadyExists && nameAlreadyExists) {
      setBorderColorEmail("border border-danger");
      setBorderColorUsername("border border-danger");
      setWarningUsername(true)
      setWarningEmail(true)
      setEmaill("");
      setNamee("");
      setPasswordd("");
    } else if (nameAlreadyExists) {
      setBorderColorUsername("border border-danger");
      setBorderColorEmail("border border-primary")
      setWarningUsername(true)
      setWarningEmail(false)
      setNamee("");
      setPasswordd("");
    } else if (emailAlreadyExists) {
      setBorderColorEmail("border border-danger");
      setBorderColorUsername("border border-primary");
      setWarningEmail(true)
      setWarningUsername(false)
      setEmaill("");
      setPasswordd("");
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
    <div className="border border-warning d-flex flex-column align-items-center p-1 register">
      <h1>Register</h1>
      <Form onSubmit={addUser} style={{ maxWidth: 500 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            className={borderColorUsername}
            type="text"
            placeholder="Enter name"
            onChange={updateNamee}
            name="name"
            value={namee}
            required
          />
          {warningUsername ? (<Form.Text className="text-muted">
            Username is already taken.
          </Form.Text>) : (<></>)}
          
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className={borderColorEmail}
            type="email"
            placeholder="Enter email"
            onChange={updateEmaill}
            name="emaill"
            value={emaill}
            required
          />
          {warningEmail ? (<Form.Text className="text-muted">
            Email is already taken.
          </Form.Text>) : (<></>)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          className="border border-primary"
            type="password"
            placeholder="Password"
            onChange={updatePasswordd}
            name="passwordd"
            value={passwordd}
            required
          />
        </Form.Group>
        <div className="d-flex flex-column align-items-center ">
          <Button variant="primary" type="submit" className="m-1">
            Submit
          </Button>
          <Link to='/'><Button variant="warning" className="m-1">
            Go to Login
          </Button></Link>
        </div>
      </Form>
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
