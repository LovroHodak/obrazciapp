import React, { useState, createContext, useContext } from "react";
import { allUsers } from "../Data";

const UsersContext = createContext();

export function UsersProvider(props) {
  const [users, setUsers] = useState(allUsers);
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <UsersContext.Provider
      value={{ users, setUsers, loggedInUser, setLoggedInUser }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
