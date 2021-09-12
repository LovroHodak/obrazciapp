import React from 'react'
import { useUsers } from "../../hooks/use-users";

export default function Detail() {
  // hooks
  const { loggedInUser } = useUsers();
  console.log(loggedInUser)

  return (
    <div>
      <h1>Detail.js</h1>
      <p>{loggedInUser.id}</p>
      <p>{loggedInUser.name}</p>
      <p>{loggedInUser.surname}</p>
      <div style={{ border: "1px solid green" }}>
        <p>{loggedInUser.address.street}</p>
        <p>{loggedInUser.address.number}</p>
        <p>{loggedInUser.address.postNr}</p>
        <p>{loggedInUser.address.city}</p>
        <p>{loggedInUser.address.country}</p>
      </div>
      <p>{loggedInUser.birthDay}</p>
      <p>{loggedInUser.gender}</p>
      <div style={{ border: "1px solid orange" }}>
      {loggedInUser.exams ? (        <div>
          {loggedInUser.exams.map((exam, i) => {
            return (
              <div key={i} style={{ border: "1px solid pink" }}>
                <p>{exam.name}</p>
                <p>{exam.grade}</p>
              </div>
            );
          })}
        </div>) : (<></>)}

      </div>
      <p>{loggedInUser.email}</p>
      <p>{loggedInUser.password}</p>
      <div style={{ border: "1px solid grey" }}>
        {loggedInUser.actions.map((action, i) => {
          return (
            <div key={i} style={{ border: "1px solid pink" }}>
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
