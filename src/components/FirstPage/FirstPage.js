import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";
import "./FirstPage.css";

export default function FirstPage() {
  // hooks
  const { loggedInUser, logMeOut, users } = useUsers();
  // onClick
  const logOut = () => {
    logMeOut();
  };
  console.log(users);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-1
        firstPage"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome {loggedInUser.name}!</Card.Title>
          <Card.Text>You have to add your personal data first!</Card.Text>
          <Link to="/addPersonalInfo">
            <Button className="w-100">Add data</Button>
          </Link>
        </Card.Body>
      </Card>
      <Button variant="danger" onClick={logOut} style={{ margin: 30 }}>
        Log Out
      </Button>
    </div>
  );
}
