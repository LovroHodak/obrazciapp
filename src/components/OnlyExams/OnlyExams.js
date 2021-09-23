import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function OnlyExams(props) {
  // hooks
  const { loggedInUser, personalInfoOnce } = useUsers();

  const [actionIdNow, setActionIdNow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = personalInfoOnce.actions.find((act) => act.id === changeToNum);

    setActionIdNow(findIt);
  }, []);

  console.log("actionIdNow", actionIdNow);

  useEffect(() => {
    if (actionIdNow !== null) {
      setLoading(false);
    }
  }, [actionIdNow]);

  if (loading) return <Spinner animation="grow" />;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-1">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Action ID: {actionIdNow.id}</Card.Title>

          <Card.Header className="bg-secondary text-light text-center">
            {actionIdNow.what}
          </Card.Header>
          <Card.Text className="m-3">
            {actionIdNow.examNamee}: {actionIdNow.examGradee}{" "}
          </Card.Text>

          <Card.Text className="text-muted">{actionIdNow.when}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
