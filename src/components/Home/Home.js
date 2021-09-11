import React from "react";

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
      <h1>Welcome back {loggedInUser.username}! </h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
