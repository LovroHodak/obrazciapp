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
  const [personalInfoData, setPersonalInfoData] = useState(null)
  // functions
  // users
  const addNewUser = (user) => {
    setUsers([...users, user]);
  };

  const extandUserInfoInUsers = (users) => {
    setUsers(users);
  }

  // loggedInUser
  const logMeOut = () => {
    setLoggedInUser(null);
    history.push("/");
  };

  const extandUserInfoInLoggedInUser = (user) => {
    setLoggedInUser(user);
  };

  // states by pages 
  // 1) personal info
  const onlyPersonalInfo = (personalInfo) => {
    setPersonalInfoData(personalInfo)
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
        addNewUser,
        logMeOut,
        extandUserInfoInUsers,
        extandUserInfoInLoggedInUser,
        personalInfoData,
        onlyPersonalInfo,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
