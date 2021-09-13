import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { useUsers } from "../../hooks/use-users";

export default function Home() {
  // hooks
  const { loggedInUser, logMeOut } = useUsers();
  // onClick
  const logOut = () => {
    logMeOut();
  };

  return (
    <div className="home">
      {loggedInUser.actions ? (
        <div>
          <h1>Welcome back {loggedInUser.name}! </h1>
          <button>Edit data</button>
          <Link to="/seeAllChanges">
            <button>See all changes in one place</button>
          </Link>
          <Link to="/addExams">
            <button>Add exams</button>
          </Link>
          <div>
            {loggedInUser.actions
              .map((action, i) => {
                return (
                  <div key={i}>
                    {action.what === "added personal info" ? (
                      <Link to="/onlyPersonalInfo">
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
        </div>
      ) : (
        <div>
          <h1>Welcome {loggedInUser.name}! </h1>
          <h2>You have to add your personal data first!</h2>{" "}
          <Link to="/addPersonalInfo">
            <button>Add data</button>
          </Link>
        </div>
      )}
      <button onClick={logOut} style={{ margin: 30 }}>
        Log Out
      </button>
    </div>
  );
}
