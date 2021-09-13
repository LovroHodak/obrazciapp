import React from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function OnlyPersonalInfo() {
  // hooks
  const { personalInfoData, loggedInUser } = useUsers();
  console.log(personalInfoData);

  return (
    <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      <h1>OnlyPersonalInfo.js - Only Personal Info</h1>
      <h2>Data added at Register</h2>
      <p>ID: {loggedInUser.id}</p>
      <p>NAME: {loggedInUser.name}</p>
      <p>EMAIL: {loggedInUser.email}</p>
      <p>PASSWORD: {loggedInUser.password}</p>
      <h2>Data added at AddPersonalInfo</h2>
      <p>{personalInfoData.surname}</p>
      <div style={{ border: "1px solid green" }}>
        <p>{personalInfoData.address.street}</p>
        <p>{personalInfoData.address.number}</p>
        <p>{personalInfoData.address.postNr}</p>
        <p>{personalInfoData.address.city}</p>
        <p>{personalInfoData.address.country}</p>
      </div>
      <p>{personalInfoData.birthDay}</p>
      <p>{personalInfoData.gender}</p>
      <div style={{ border: "1px solid grey" }}>
        {personalInfoData.actions.map((action, i) => {
          return (
            <div key={i} style={{ border: "1px solid pink" }}>
              <p>{action.id}</p>
              <p>{action.what}</p>
              <p>{action.when}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* {
    id: 1,
    name: "Ana",
    surname: "Novak",
    address: {
      street: "Slovenska",
      number: "10b",
      postNr: 2000,
      city: "Maribor",
      country: "Slovenia",
    },
    birthDay: "03.10.1989",
    gender: "female",
    exams: [{ name: "Math", grade: 10 }],
    email: "ana@gmail.com",
    password: "love88",
    actions: [
      { what: "added personal info", when: "2.1.2008" },
      { what: "added new exam", when: "2.2.2010" },
    ],
  } */
