import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, ListGroup, CardDeck } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function SeeAllChanges() {
  // hooks
  const { loggedInUser, users } = useUsers();
  console.log("loggedInUser", loggedInUser);
  console.log("users", users);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-1'>
      {loggedInUser.actions
        .map((action, i) => {
          return (
            <Card  style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <Card.Title>Action: {action.id}</Card.Title>
                <Card.Header>{action.what}</Card.Header>
                <Card.Text></Card.Text>
                
            
              {action.examNamee ? (
                <Card.Text>
                  {action.examNamee}: {action.examGradee}{" "}
                </Card.Text>
              ) : (
                <></>
              )}
              {action.userNamee ? (
                <Card.Text>
                  Changed name from {action.oldUserNamee} to {action.userNamee}{" "}
                  and surname from {action.oldUserSurnamee} to{" "}
                  {action.userSurnamee}.
                </Card.Text>
              ) : (
                <></>
              )}
              {action.userStreett ? (
                <Card.Text>
                  Changed street from {action.oldUserStreett} to{" "}
                  {action.userStreett}, street number from{" "}
                  {action.oldUserNumberr} to {action.userNumberr}, city from
                  {action.oldUserCityy} to {action.userCityy}, post number from{" "}
                  {action.oldUserPostNrr} to {action.userPostNrr} and country
                  from
                  {action.oldUserCountryy} to {action.userCountryy}.
                </Card.Text>
              ) : (
                <></>
              )}
              <Card.Text className="text-muted">{action.when}</Card.Text>
              </Card.Body>
            </Card>
           
          );
        })
        .reverse()}
    </div>
  );
}
