import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, ListGroup, CardDeck } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function SeeAllChanges() {
  // hooks
  const { loggedInUser, users, personalInfoOnce } = useUsers();
  console.log("loggedInUser", loggedInUser);
  console.log("users", users);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-1">
      {loggedInUser.actions
        .map((action, i) => {
          return (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <Card.Title>Action: {action.id}</Card.Title>
                <ListGroup variant="flush">
                  <Card.Header className="bg-secondary text-light">
                    {action.what}
                  </Card.Header>

                  {action.what === "Added personal info" ? (
                    <ListGroup>
                      <ListGroup.Item>ID: {personalInfoOnce.id}</ListGroup.Item>
                      <ListGroup.Item>
                        Name: {personalInfoOnce.name}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Email: {personalInfoOnce.email}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Password: {personalInfoOnce.password}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Surname: {personalInfoOnce.surname}
                      </ListGroup.Item>
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
                  ) : (
                    <></>
                  )}

                  {action.what === "Added new exam" ? (
                    <div>
                      {personalInfoOnce.actions.map((act, i) => {
                        if (act.id === action.id){
                          return (<ListGroup.Item key={i}>
                            {act.examNamee}: {act.examGradee}
                          </ListGroup.Item>)
                        }
                      })}
                    </div>
                  ): (<></>)}

                 
                  {action.oldName ? (
                    <ListGroup.Item>
                      Changed exam name from {action.oldName} to{" "}
                      {action.newName} and grade from {action.oldGrade} to{" "}
                      {action.newGrade}.
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  {action.userNamee ? (
                    <ListGroup.Item>
                      Changed name from {action.oldUserNamee} to{" "}
                      {action.userNamee} and surname from{" "}
                      {action.oldUserSurnamee} to {action.userSurnamee}.
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  {action.userEmaill ? (
                    <ListGroup.Item>
                      Changed email from {action.oldUserEmaill} to{" "}
                      {action.userEmaill} and password from{" "}
                      {action.oldUserPasswordd} to {action.userPasswordd}.
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  {action.userBirthdayy ? (
                    <ListGroup.Item>
                      Changed date of birth from {action.oldUserBirthdayy} to{" "}
                      {action.userBirthdayy} and gender from{" "}
                      {action.oldUserGenderr} to {action.userGenderr}.
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  {action.userStreett ? (
                    <ListGroup.Item>
                      Changed street from {action.oldUserStreett} to{" "}
                      {action.userStreett}, street number from{" "}
                      {action.oldUserNumberr} to {action.userNumberr}, city from{" "}
                      {action.oldUserCityy} to {action.userCityy}, post number
                      from {action.oldUserPostNrr} to {action.userPostNrr} and
                      country from {action.oldUserCountryy} to{" "}
                      {action.userCountryy}.
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  <ListGroup.Item className="text-muted">
                    {action.when}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          );
        })
        .reverse()}
    </div>
  );
}
