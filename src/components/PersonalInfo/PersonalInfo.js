import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function PersonalInfo() {
  // hooks
  const { personalInfoOnce } = useUsers();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-1">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Personal Info</Card.Title>
          <ListGroup variant="flush">
            <Card.Header className="bg-secondary text-light">
              Data added at Register
            </Card.Header>
            <ListGroup.Item>ID: {personalInfoOnce.id}</ListGroup.Item>
            <ListGroup.Item>Name: {personalInfoOnce.name}</ListGroup.Item>
            <ListGroup.Item>Email: {personalInfoOnce.email}</ListGroup.Item>
            <ListGroup.Item>
              Password: {personalInfoOnce.password}
            </ListGroup.Item>
            <Card.Header className="bg-secondary text-light">
              Data added at Personal Info
            </Card.Header>
            <ListGroup.Item>Surname: {personalInfoOnce.surname}</ListGroup.Item>
            <ListGroup.Item>
              Date of birth: {personalInfoOnce.birthDay}
            </ListGroup.Item>
            <ListGroup.Item>
              Street: {personalInfoOnce.address.street}
            </ListGroup.Item>
            <ListGroup.Item>
              Street Number: {personalInfoOnce.address.number}
            </ListGroup.Item>
            <ListGroup.Item>
              Post number: {personalInfoOnce.address.postNr}
            </ListGroup.Item>
            <ListGroup.Item>
              City: {personalInfoOnce.address.city}
            </ListGroup.Item>
            <ListGroup.Item>
              Country: {personalInfoOnce.address.country}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
