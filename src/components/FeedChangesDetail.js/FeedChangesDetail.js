import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function FeedChangesDetail(props) {
  // hooks
  const { loggedInUser } = useUsers();
  console.log(loggedInUser.exams);

  const [actionIdNow, setActionIdNow] = useState(null);
  const [examIdNow, setExamIdNow] = useState(null);

  // state - input
  const [gradeEditing, setGradeEditing] = useState(null);
  const [gradeEditingText, setGradeEditingText] = useState("");

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);
    let findItAgain = loggedInUser.exams.find((act) => act.id === changeToNum);
    console.log("find1", findIt);
    console.log("find2", findItAgain);
    console.log("myId", typeof myId);
    console.log("changetonum", typeof changeToNum);
    setActionIdNow(findIt);
    setExamIdNow(findItAgain)
    console.log("find it", findIt);
    console.log("actionIdNow", actionIdNow);
    console.log("logggggg", loggedInUser);
  }, []);

  function editGrade() {
    setActionIdNow({...actionIdNow, grade: gradeEditingText})
    actionIdNow.grade = gradeEditingText;
    examIdNow.grade = gradeEditingText;

    setGradeEditing(null);
    setGradeEditingText("");
    console.log('logggggg', loggedInUser)
  }

  return (
    <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      {actionIdNow ? (
        <div>
          <p>{actionIdNow.id}</p>
          <p>{actionIdNow.when}</p>
          <p>
            {actionIdNow.what} from {actionIdNow.oldData} to {actionIdNow.change}
          </p>
          {actionIdNow.name ? (
            <div>
              {gradeEditing ? (
                <div>
                  <input
                    type="text"
                    onChange={(e) => setGradeEditingText(e.target.value)}
                    value={gradeEditingText}
                  />
                  <button onClick={() => editGrade(actionIdNow.grade)}>
                    Submit Edits
                  </button>
                </div>
              ) : (
                <div>
                  <p>{actionIdNow.grade}</p>
                  <button onClick={() => setGradeEditing(actionIdNow.grade)}>
                    Edit Grade
                  </button>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
