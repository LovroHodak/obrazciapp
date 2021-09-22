import React from 'react'
import { Card, Button, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";



export default function Index() {

    // hooks
  const { loggedInUser } = useUsers();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-1">
            <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Personal Info</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>ID: {loggedInUser.id}</ListGroup.Item>
            <ListGroup.Item>Name: {loggedInUser.name}</ListGroup.Item>
            <ListGroup.Item>Surname: {loggedInUser.surname}</ListGroup.Item>
            <ListGroup.Item>Email: {loggedInUser.email}</ListGroup.Item>
            <ListGroup.Item>
              Password: {loggedInUser.password}
            </ListGroup.Item>
            <ListGroup.Item>
              Gender: {loggedInUser.gender}
            </ListGroup.Item>
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
          <Card.Title>Exams</Card.Title>

            {loggedInUser.exams.map((exam, i) => {
              return (
                <ListGroup variant="flush">
                  <Card.Header className="bg-secondary text-light">
                  {exam.name}: {exam.grade}
                  </Card.Header>
                  <ListGroup.Item>ID: {exam.id}</ListGroup.Item>
                  <ListGroup.Item  className="text-muted">{exam.when}</ListGroup.Item>
                </ListGroup>
              );
            })}
        </Card.Body>
      </Card>
        </div>
    )
}
