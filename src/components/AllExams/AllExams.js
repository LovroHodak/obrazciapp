import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function AllExams() {
  // hooks
  const { loggedInUser } = useUsers();

  return (
    
      <div className="d-flex flex-column justify-content-center align-items-center p-1">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Exams</Card.Title>

            {loggedInUser.exams.map((exam, i) => {
              return (
                <ListGroup variant="flush">
                  <Card.Header className="bg-secondary text-light">
                    {exam.when}
                  </Card.Header>
                  <ListGroup.Item>{exam.name}</ListGroup.Item>
                  <ListGroup.Item>{exam.grade}</ListGroup.Item>
                  <ListGroup.Item>ID: {exam.id}</ListGroup.Item>
                </ListGroup>
              );
            })}
          </Card.Body>
        </Card>
      </div>
    
  );
}
