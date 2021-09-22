import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function InfoOnTime() {
    const { loggedInUser } = useUsers();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-1">
     
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Personal Info</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>ID: {loggedInUser.id}</ListGroup.Item>
            <ListGroup.Item>Name: {loggedInUser.name}</ListGroup.Item>
            <ListGroup.Item>Email: {loggedInUser.email}</ListGroup.Item>
            <ListGroup.Item>
              Password: {loggedInUser.password}
            </ListGroup.Item>
            <ListGroup.Item>Surname: {loggedInUser.surname}</ListGroup.Item>
            <ListGroup.Item>
              Date of birth: {loggedInUser.birthDay}
            </ListGroup.Item>
            <ListGroup.Item>
              Street: {loggedInUser.address.street}
            </ListGroup.Item>
            <ListGroup.Item>
              Street Number: {loggedInUser.address.number}
            </ListGroup.Item>
            <ListGroup.Item>
              Post number: {loggedInUser.address.postNr}
            </ListGroup.Item>
            <ListGroup.Item>
              City: {loggedInUser.address.city}
            </ListGroup.Item>
            <ListGroup.Item>
              Country: {loggedInUser.address.country}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
    )
}
