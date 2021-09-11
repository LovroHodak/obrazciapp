import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";

import { allUsers } from "../Data";

const UsersContext = createContext();

export function UsersProvider(props) {
  // history
  let history = useHistory();
  // states
  const [users, setUsers] = useState(allUsers);
  const [loggedInUser, setLoggedInUser] = useState(null);
  // functions
  const addNewUser = (user) => {
    setUsers([...users, user]);
  };

  const logMeOut = () => {
    setLoggedInUser(null);
    history.push("/");
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
        addNewUser,
        logMeOut,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
