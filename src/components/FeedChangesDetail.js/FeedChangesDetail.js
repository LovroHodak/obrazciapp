import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../hooks/use-users";

export default function FeedChangesDetail(props) {
  // hooks
  const { loggedInUser } = useUsers();
  console.log(loggedInUser);

  const [actionIdNow, setActionIdNow] = useState(null);

  useEffect(() => {
    let myId = props.match.params.id;
    let changeToNum = Number(myId);
    let findIt = loggedInUser.actions.find((act) => act.id === changeToNum);
    console.log("cant see shit", findIt);
    console.log("myId", typeof myId);
    console.log("changetonum", typeof changeToNum);
    setActionIdNow(findIt);
    console.log('find it', findIt)
    console.log("actionIdNow", actionIdNow);
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      {actionIdNow ? (
        <div>
          <p>{actionIdNow.id}</p>
          <p>{actionIdNow.when}</p>
          <p>{actionIdNow.what}</p>
          <p>{actionIdNow.name}</p>
          <p>{actionIdNow.grade}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
