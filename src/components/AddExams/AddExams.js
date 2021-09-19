import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function AddExams() {
  // hooks
  const { users, loggedInUser, updateAllUsers } = useUsers();
  // state - input
  const [examName, setExamName] = useState("");
  const [examGrade, setExamGrade] = useState("");

  // FUNCTIONS
  // inputs function - handler
  const updateExamName = (e) => {
    setExamName(e.target.value);
  };
  const updateExamGrade = (e) => {
    setExamGrade(e.target.value);
  };
  // helper functions
  const updatedUsers = users.map((user) => {
    if (user.id === loggedInUser.id) {
      return loggedInUser;
    }
    return user;
  });

  // main function - submit
  const addNewExam = (e) => {
    e.preventDefault();
    // push properties
    loggedInUser.actions.push({
      id: new Date().getTime(),
      what: "added new exam",
      when: new Date().toString().slice(0, 24),
      name: examName,
      grade: examGrade,
      change: 'Exams'
    });
    loggedInUser.exams.push({
      name: examName,
      grade: examGrade,
      id: new Date().getTime(),
      when: new Date().toString().slice(0, 24),
    });
    updateAllUsers(loggedInUser);
    setExamName("");
    setExamGrade("");

    console.log(loggedInUser);
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-1'>
      <h1>AddExams</h1>
      <Form onSubmit={addNewExam} style={{ maxWidth: 500 }}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Exam name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter exam name"
            onChange={updateExamName}
            name="examName"
            value={examName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Exam grade:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Exam grade"
            onChange={updateExamGrade}
            name="examGrade"
            value={examGrade}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="m-1">
          Submit
        </Button>
      </Form>

      <div>
        {loggedInUser.exams ? (
          <div>
            {loggedInUser.exams.map((exam, i) => {
              return (
                <Card key={i} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{exam.name}</Card.Title>
                    <Card.Text>{exam.grade}</Card.Text>
                    <Card.Text className="text-muted">{exam.when}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
