import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function FeedChangesDetail(props) {
  // hooks
  const { loggedInUser } = useUsers();
  console.log(loggedInUser.exams);

  const [actionIdNow, setActionIdNow] = useState(null);
  const [examIdNow, setExamIdNow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);
    let findItAgain = loggedInUser.exams.find((act) => act.id === changeToNum);

    setActionIdNow(findIt);
    setExamIdNow(findItAgain);
    console.log("actionIdNow", actionIdNow);
    console.log("logggggg", loggedInUser);

    console.log("findIt", findIt);
  }, []);

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

          {actionIdNow.oldName ? (
            <Card.Text>
              Changed exam name from {actionIdNow.oldName} to{" "}
              {actionIdNow.newName} and grade from {actionIdNow.oldGrade} to{" "}
              {actionIdNow.newGrade}.
            </Card.Text>
          ) : (
            <></>
          )}
          {actionIdNow.userNamee ? (
            <Card.Text>
              Changed name from {actionIdNow.oldUserNamee} to{" "}
              {actionIdNow.userNamee} and surname from{" "}
              {actionIdNow.oldUserSurnamee} to {actionIdNow.userSurnamee}.
            </Card.Text>
          ) : (
            <></>
          )}
          {actionIdNow.userEmaill ? (
            <Card.Text>
              Changed email from {actionIdNow.oldUserEmaill} to{" "}
              {actionIdNow.userEmaill} and password from{" "}
              {actionIdNow.oldUserPasswordd} to {actionIdNow.userPasswordd}.
            </Card.Text>
          ) : (
            <></>
          )}
          {actionIdNow.userBirthdayy ? (
            <Card.Text>
              Changed birthday from {actionIdNow.oldUserBirthdayy} to{" "}
              {actionIdNow.userBirthdayy} and gender from{" "}
              {actionIdNow.oldUserGenderr} to {actionIdNow.userGenderr}.
            </Card.Text>
          ) : (
            <></>
          )}
          {actionIdNow.userStreett ? (
            <Card.Text>
              Changed street from {actionIdNow.oldUserStreett} to{" "}
              {actionIdNow.userStreett}, street number from{" "}
              {actionIdNow.oldUserNumberr} to {actionIdNow.userNumberr}, city
              from {actionIdNow.oldUserCityy} to {actionIdNow.userCityy}, post
              number from {actionIdNow.oldUserPostNrr} to{" "}
              {actionIdNow.userPostNrr} and country from{" "}
              {actionIdNow.oldUserCountryy} to {actionIdNow.userCountryy}.
            </Card.Text>
          ) : (
            <></>
          )}
          <Card.Text className="text-muted">{actionIdNow.when}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
