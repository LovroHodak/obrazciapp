import React, { useState } from "react";
import { useUsers } from "../../hooks/use-users";

export default function AddExams() {
  
  // hooks
  const { users, setUsers, loggedInUser, setLoggedInUser } = useUsers();
  // state - input
  const [examName, setExamName] = useState("");
  const [examGrade, setExamGrade] = useState("");

  console.log(loggedInUser);
  console.log(users);
  // FUNCTIONS
  // inputs function - handler
  const updateExamName = (e) => {
    setExamName(e.target.value);
  };
  const updateExamGrade = (e) => {
    setExamGrade(e.target.value);
  };

  // main function - submit
  const addNewExam = (e) => {
    e.preventDefault();

    loggedInUser.actions.push({what: 'nada', when: 'now'})
    loggedInUser.exams.push({name: examName, grade: examGrade})

    

    setExamName("");
    setExamGrade("");
  };
  return (
    <div>
      <h1>AddExams</h1>
      <form onSubmit={addNewExam}>
        <label>Exam name:</label>
        <input
          onChange={updateExamName}
          type="text"
          name="examName"
          value={examName}
          placeholder="Enter exam name"
          required
        />
        <label>Grade:</label>
        <input
          onChange={updateExamGrade}
          type="text"
          name="examGrade"
          value={examGrade}
          placeholder="Enter exam grade"
          required
        />
        <button type="submit">Submit</button>
      </form>

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
          {loggedInUser.exams ? (
            <div>
              {loggedInUser.exams.map((exam, i) => {
                return (
                  <div key={i} style={{ border: "1px solid pink" }}>
                    <p>{exam.name}</p>
                    <p>{exam.grade}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
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
    </div>
  );
}
