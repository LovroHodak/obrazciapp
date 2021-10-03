import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import "./Login.css";
import { useUsers } from "../../hooks/use-users";

export default function Login() {
  // history
  let history = useHistory();
  // hooks
  const { users, addLoggedInUser } = useUsers();

  // STATES
  // states - input
  const [emaill, setEmaill] = useState("");
  const [passwordd, setPasswordd] = useState("");
  // states - warnings
  const [borderColorEmail, setBorderColorEmail] = useState(
    "border border-primary"
  );
  const [borderColorPassword, setBorderColorPassword] = useState(
    "border border-primary"
  );
  const [warningEmail, setWarningEmail] = useState(false);
  const [warningPassword, setWarningPassword] = useState(false);

  // FUNCTIONS
  // inputs function - handler
  const updateEmaill = (e) => {
    setEmaill(e.target.value);
  };
  const updatePasswordd = (e) => {
    setPasswordd(e.target.value);
  };
  // helper function - validation
  const loginStatus = () => {
    const correctMailWrongPass = users.find(
      (user) => user.email === emaill && user.password !== passwordd
    );
    const correctMailPass = users.find(
      (user) => user.email === emaill && user.password === passwordd
    );

    const hasAccount = users.find(
      (user) => user.email === emaill && user.password === passwordd &&
      user.hasOwnProperty('gender') === true
    );
   
    
    if (correctMailWrongPass) {
      setPasswordd("");
      setBorderColorEmail("border border-primary");
      setBorderColorPassword("border border-danger");
      setWarningPassword(true);
      setWarningEmail(false);
    } else if (!correctMailPass) {
      setEmaill("");
      setPasswordd("");
      setBorderColorEmail("border border-danger");
      setBorderColorPassword("border border-danger");
      setWarningEmail(true);
    } else if (hasAccount) {
      addLoggedInUser(correctMailPass);
      console.log(correctMailPass);
      setEmaill("");
      setPasswordd("");
      history.push("/home");
    } else {
      addLoggedInUser(correctMailPass);
      console.log(correctMailPass);
      setEmaill("");
      setPasswordd("");
      history.push("/firstPage");
    }
  };
  // main function - submit
  const checkLogin = (e) => {
    e.preventDefault();
    loginStatus();

    console.log(users);
  };

  return (
    <div
      className="border border-warning d-flex flex-column align-items-center p-1
 login"
    >
      <h1>Login</h1>
      <Form onSubmit={checkLogin} style={{ maxWidth: 500 }}>
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
          {warningEmail ? (
            <Form.Text className="text-muted">User doesnt exist.</Form.Text>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={borderColorPassword}
            type="password"
            placeholder="Password"
            onChange={updatePasswordd}
            name="passwordd"
            value={passwordd}
            required
          />
          {warningPassword ? (
            <Form.Text className="text-muted">Wrong password.</Form.Text>
          ) : (
            <></>
          )}
        </Form.Group>
        <div className="d-flex flex-column align-items-center ">
          <Button variant="primary" type="submit" className="m-1">
            Submit
          </Button>
          <Link to="/register">
            <Button variant="warning" className="m-1">
              Go to register
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
