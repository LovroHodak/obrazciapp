import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

/* What is happening?
V drugem useEffectu nastimam state (actionIdNow).
In potem bi hotu iz tega state-a (actionIdNow) 
nastimat nov state (gradeEditText).
Mi pa tega ne pusti ker (actionIdNow)  se ni naloadan.
Jst sem ziher da lahko to zrihtam z useEffectom sam kako pa res vec ne vem.
Torej kako nej bi izgledal kaj si zelim je: 

setGradeEditText({
  name: actionIdNow.examNamee,
  grade: actionIdNow.examGradee
})  */

export default function EditExam(props) {
  // hooks
  const { loggedInUser, updateAllUsers } = useUsers();

  const [actionIdNow, setActionIdNow] = useState(null);
  const [examFoundIt, setExamFoundIt] = useState(null);

  const [fixed, setFixed] = useState({});

  useEffect(() => {
    let imutableData = JSON.parse(JSON.stringify(loggedInUser));
    setFixed(imutableData);
    console.log(imutableData);
  }, []);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);

    let findExam = loggedInUser.exams.find((act) => act.id === changeToNum);

    setActionIdNow(findIt);
    setExamFoundIt(findExam);

    console.log("log efect", loggedInUser);
    console.log("findIt efect", findIt);
  }, []);

  console.log("actionIdNow", actionIdNow);
  console.log("examFoundIt", examFoundIt);
  console.log("logggggg", loggedInUser);

  const [gradeEdit, setGradeEdit] = useState(false);
  const [gradeEditText, setGradeEditText] = useState({
    name: loggedInUser.exams[0].name,
    grade: loggedInUser.exams[0].grade,
  });

  /* 
--------------------------------------------------FIX ITTTTTTTTTTTT
 i want line 43 and 44 to look like this: 

name: actionIdNow.examNamee,
grade: actionIdNow.examGradee

but it wont allow me because data is still loading. 
Is there a way to use useEffect or smt?


 */
  function edit() {
    actionIdNow.examNamee = gradeEditText.name;
    actionIdNow.examGradee = gradeEditText.grade;

    loggedInUser.actions.push({
      id: new Date().getTime(),
      what: "Edited exam",
      when: new Date().toString().slice(0, 24),
      oldName: fixed.exams[0].name,
      newName: actionIdNow.examNamee,
      oldGrade: fixed.exams[0].grade,
      newGrade: actionIdNow.examGradee,
    });

    examFoundIt.name = actionIdNow.examNamee;
    examFoundIt.grade = actionIdNow.examGradee;

    setGradeEdit(false);
    updateAllUsers(loggedInUser);
    setGradeEditText({
      name: actionIdNow.examNamee,
      grade: actionIdNow.examGradee,
    });
  }

  return (
    <div>
      {actionIdNow ? (
        <div>
          {gradeEdit ? (
            <div>
              <form>
                <input
                  type="text"
                  onChange={(e) =>
                    setGradeEditText({
                      ...gradeEditText,
                      name: e.target.value,
                    })
                  }
                  value={gradeEditText.name}
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setGradeEditText({
                      ...gradeEditText,
                      grade: e.target.value,
                    })
                  }
                  value={gradeEditText.grade}
                />
              </form>
              <button onClick={() => edit()}>close form</button>
            </div>
          ) : (
            <div>
              <p>actionIdNow.id{actionIdNow.id}</p>
              <p>actionIdNow.examNamee: {actionIdNow.examNamee}</p>
              <p>actionIdNow.examGradee: {actionIdNow.examGradee}</p>
              <button onClick={() => setGradeEdit(true)}>Open form</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>Still loading</p>
        </div>
      )}

      {/* {gradeEdit ? (
        <div>
          <form>
              <input value={gradeEditText.examGradee} />
          </form>
          <button  onClick={() => setGradeEdit(false)}>close form</button>
        </div>
      ) : (
        <div>
          <p>actionIdNow.id{actionIdNow.id}</p>
          <p>actionIdNow.examNamee: {actionIdNow.examNamee}</p>
          <p>actionIdNow.examGradee: {actionIdNow.examGradee}</p>
          <button onClick={() => setGradeEdit(true)}>Open form</button>
        </div>
      )} */}
    </div>
  );
}
