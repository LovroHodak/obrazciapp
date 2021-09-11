import React from 'react'
import './Home.css'
import { useUsers } from "../../hooks/use-users";

export default function Home() {
  const { users, loggedInUser, setLoggedInUser } = useUsers();
  console.log(loggedInUser);
    return (
      <div className="home">
        <h1>Welcome back {loggedInUser.username}! </h1>
      </div>
    );
}
