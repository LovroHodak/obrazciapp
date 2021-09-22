import React, { useEffect, useState } from "react";
import { Form, Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function EditExam(props) {
  // hooks
  const { loggedInUser, updateAllUsers, users, setLoggedInUser } = useUsers();

  const [actionIdNow, setActionIdNow] = useState(null);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);

    setActionIdNow(findIt);

    console.log("logggggg", loggedInUser);

    console.log("findIt", findIt);
  }, []);

  console.log("actionIdNow", actionIdNow);

  const [gradeEdit, setGradeEdit] = useState(false);
  const [gradeEditText, setGradeEditText] = useState({name: 'mama', grade: '200'});


  function edit(){
    actionIdNow.examNamee = gradeEditText.name
    actionIdNow.examGradee = gradeEditText.grade
    setGradeEdit(false)

    
  }

  return (
    <div>
      {actionIdNow ? (
        <div>
          {gradeEdit ? (
        <div>
          <form>
              <input type="text"
                onChange={(e) =>
                    setGradeEditText({
                    ...gradeEditText,
                    name: e.target.value,
                  })
                } value={gradeEditText.name} />
                <input type="text"
                onChange={(e) =>
                    setGradeEditText({
                    ...gradeEditText,
                    grade: e.target.value,
                  })
                } value={gradeEditText.grade} />
          </form>
          <button  onClick={() => edit()}>close form</button>
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
