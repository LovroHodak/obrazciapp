import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import "./Home.css";
import { useUsers } from "../../hooks/use-users";

export default function Home() {
  // hooks
  const { loggedInUser, logMeOut, users } = useUsers();
  // onClick
  const logOut = () => {
    logMeOut();
  };
  console.log(users);
  return (
    <div className="d-flex flex-column align-items-center p-1 home">
      <div className="d-flex flex-column align-items-center p-1">
        <h1>Howdy {loggedInUser.name}! </h1>
        <div>
          <Link to="/index">
            <Button className="m-1" variant="info">
              Index
            </Button>
          </Link>
          <Link to="/infoOnTime">
            <Button className="m-1" variant="info">
              Personal Info
            </Button>
          </Link>
          <Link to="/onlyPersonalInfo">
            <Button className="m-1" variant="info">
              Edit personal info
            </Button>
          </Link>
          <Link to="/addExams">
            <Button className="m-1" variant="info">
              Add exam
            </Button>
          </Link>

          <Link to="/allExams">
            <Button className="m-1" variant="info">
              Edit exams
            </Button>
          </Link>
          <Link to="/seeAllChanges">
            <Button className="m-1" variant="info">
              See all changes in one place
            </Button>
          </Link>
        </div>

        <div>
          {loggedInUser.actions
            .map((action, i) => {
              return (
                <div key={i}>
                  {action.what === "Added personal info" ? (
                    <Link to="/personalInfo">
                      <h5>
                        {i + 1}. {action.what}, {action.when}
                      </h5>
                    </Link>
                  ) : (
                    <Link to={`/feedChangesDetail/${action.id}`}>
                      <h5>
                        {i + 1}. {action.what}, {action.when}
                      </h5>
                    </Link>
                  )}
                </div>
              );
            })
            .reverse()}
        </div>
        <Button variant="danger" onClick={logOut} style={{ margin: 30 }}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
