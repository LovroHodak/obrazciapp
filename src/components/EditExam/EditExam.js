import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function EditExam(props) {
  // hooks
  const { loggedInUser, updateAllUsers } = useUsers();

  // STATES
  const [actionIdNow, setActionIdNow] = useState(null);
  const [examFoundIt, setExamFoundIt] = useState(null);
  // states - input
  const [gradeEdit, setGradeEdit] = useState(false);
  const [gradeEditText, setGradeEditText] = useState(null);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);

    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);
    let findExam = loggedInUser.exams.find((act) => act.id === changeToNum);

    setActionIdNow(findIt);
    setExamFoundIt(findExam);
  }, []);

  useEffect(() => {
    // preveri, ali ima actionIdNow ze vrednost
    if (actionIdNow) {
      setGradeEditText({
        name: actionIdNow.examNamee,
        grade: actionIdNow.examGradee,
      });
    }
  }, [actionIdNow]);

  // FUNCTIONS
  function edit() {
    actionIdNow.examNamee = gradeEditText.name;
    actionIdNow.examGradee = gradeEditText.grade;

    loggedInUser.actions.push({
      id: new Date().getTime(),
      what: "Edited exam",
      when: new Date().toString().slice(0, 24),
      oldName: examFoundIt.name,
      newName: actionIdNow.examNamee,
      oldGrade: examFoundIt.grade,
      newGrade: actionIdNow.examGradee,
    });

    examFoundIt.name = actionIdNow.examNamee;
    examFoundIt.grade = actionIdNow.examGradee;

    setGradeEdit(false);
    updateAllUsers(loggedInUser);
    setGradeEditText({
      name: actionIdNow.examNamee,
      grade: actionIdNow.examGradee,
    });
  }

  return (
    <div>
      {actionIdNow ? (
        <div>
          {gradeEdit ? (
            <Card>
              <Card.Body>
                <Form.Group className="mb-3 ">
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setGradeEditText({
                        ...gradeEditText,
                        name: e.target.value,
                      })
                    }
                    value={gradeEditText.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setGradeEditText({
                        ...gradeEditText,
                        grade: e.target.value,
                      })
                    }
                    value={gradeEditText.grade}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={() => edit()}
                  className="w-100"
                >
                  Submit
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title>Action ID:</Card.Title>
                <Card.Text> {actionIdNow.id}</Card.Text>
                <Card.Title>Exam name:</Card.Title>
                <Card.Text> {actionIdNow.examNamee}</Card.Text>
                <Card.Title>Exam grade:</Card.Title>
                <Card.Text> {actionIdNow.examGradee}</Card.Text>
                <Button
                  variant="info"
                  onClick={() => setGradeEdit(true)}
                  className="w-100"
                >
                  Edit Name & Grade
                </Button>
              </Card.Body>
            </Card>
          )}
        </div>
      ) : (
        <div>
          <p>Still loading</p>
        </div>
      )}
    </div>
  );
}
