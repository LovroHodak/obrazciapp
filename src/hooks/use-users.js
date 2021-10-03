import userEvent from "@testing-library/user-event";
import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";

import {allUsers} from '../Data'

const UsersContext = createContext();

function getFromLocalStorage() {
  const value = localStorage.getItem("loggedInUserr");
  const secondValue = localStorage.getItem("personalInfoOnceee");
  if (value && secondValue) {
    return JSON.parse(value);
  }
  return null;
}

export function UsersProvider(props) {
  // history
  let history = useHistory();
  // states
  const [users, setUsers] = useState(allUsers);
  const [loggedInUser, setLoggedInUser] = useState(getFromLocalStorage);

  const [personalInfoOnce, setPersonalInfoOnce] = useState(getFromLocalStorage)


  React.useEffect(() => {
    localStorage.setItem("loggedInUserr", JSON.stringify(loggedInUser));
    localStorage.setItem("personalInfoOnceee", JSON.stringify(personalInfoOnce));
  }, [loggedInUser, personalInfoOnce]);



  // functions with setters for states
  // users
  const addNewUser = (user) => {
    setUsers([...users, user]);
    setPersonalInfoOnce(user)
    console.log(users);
  };
  console.log(users);
  const updateAllUsers = (oneUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === oneUser.id) {
        return oneUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    console.log(updatedUsers)
  };

  // loggedInUser
  const addLoggedInUser = (user) => {
    setLoggedInUser(user);
    console.log(users);
  };

  const updateLoggedInUser = (user) => {
    setLoggedInUser(user);
    console.log(users);
  };

  const logMeOut = () => {
    setLoggedInUser(null);
    history.push("/");
    console.log(users)
  };


  const updatePersonalInfoOnce = (user) => {
    setPersonalInfoOnce(user)
  }

  


  return (
    <UsersContext.Provider
      value={{
        users,
        addNewUser,
        updateAllUsers,
        setLoggedInUser,

        loggedInUser,
        addLoggedInUser,
        updateLoggedInUser,
        logMeOut,

        personalInfoOnce,
        updatePersonalInfoOnce,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
