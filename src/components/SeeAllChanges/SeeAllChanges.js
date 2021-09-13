import React from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function SeeAllChanges() {
  // hooks
  const { loggedInUser } = useUsers();
  console.log(loggedInUser);
  return (
    <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      <h1>PERSONAL</h1>
      <p>
        <b>user id</b>: {loggedInUser.id}
      </p>
      <p>
        <b>email </b>: {loggedInUser.email}
      </p>
      <p>
        <b>password </b>
        {loggedInUser.password}
      </p>
      <p>
        <b>user name</b>
        {loggedInUser.name}
      </p>
      <p>
        <b>user surname </b>
        {loggedInUser.surname}
      </p>
      <p>
        <b>birth day </b>
        {loggedInUser.birthDay}
      </p>
      <p>
        <b>gender </b>
        {loggedInUser.gender}
      </p>
      <div style={{ border: "1px solid green" }}>
        <h1>ADDRESS</h1>
        <p>
          <b>street </b>
          {loggedInUser.address.street}
        </p>
        <p>
          <b>street number </b>
          {loggedInUser.address.number}
        </p>
        <p>
          <b>post nr </b>
          {loggedInUser.address.postNr}
        </p>
        <p>
          <b>city </b>
          {loggedInUser.address.city}
        </p>
        <p>
          <b>country </b>
          {loggedInUser.address.country}
        </p>
      </div>
      <div style={{ border: "1px solid orange" }}>
        <h1>EXAMS</h1>
        {loggedInUser.exams ? (
          <div>
            {loggedInUser.exams.map((exam, i) => {
              return (
                <div key={i} style={{ border: "1px solid pink" }}>
                  <p>
                    <b>exam name </b>
                    {exam.name}
                  </p>
                  <p>
                    <b>exam grade </b>
                    {exam.grade}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div style={{ border: "1px solid grey" }}>
        <h1>ACTIONS</h1>
        {loggedInUser.actions.map((action, i) => {
          return (
            <div key={i} style={{ border: "1px solid pink" }}>
              <p>
                <b>action id </b>
                {action.id}
              </p>
              <p>
                <b>action what </b>
                {action.what}
              </p>
              <p>
                <b>action when </b>
                {action.when}
              </p>
              {action.name ? (
                <div>
                  <p>
                    <b>action exam name </b>
                    {action.name}
                  </p>
                  <p>
                    <b>action exam grade </b>
                    {action.grade}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
