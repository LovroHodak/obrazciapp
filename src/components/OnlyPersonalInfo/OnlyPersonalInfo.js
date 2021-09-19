import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function OnlyPersonalInfo() {
  // hooks
  const { loggedInUser, users, updateAllUsers } = useUsers();
  // state - input
  const [surnameEditing, setSurnameEditing] = useState(false);
  const [surnameEditingText, setSurnameEditingText] = useState(
    loggedInUser.surname
  );

  const [fixed, setFixed] = useState({});

  useEffect(() => {
    let imutableData = JSON.parse(JSON.stringify(loggedInUser));
    setFixed(imutableData);
    console.log(imutableData);
  }, []);

  console.log("FIXED DATA", fixed);

  const [nameEditing, setNameEditing] = useState(false);
  const [nameEditingText, setNameEditingText] = useState(loggedInUser.name);

  const [addressObjEditing, setAddressEditing] = useState(false);
  const [addressEditingData, setAddressEditingData] = useState({
    city: loggedInUser.address.city,
    country: loggedInUser.address.country,
    number: loggedInUser.address.number,
    postNr: loggedInUser.address.postNr,
    street: loggedInUser.address.street,
  });

  const [mailPassEditing, setMailPassEditing] = useState(false);
  const [mailPassEditingData, setMailPassEditingData] = useState({
    email: loggedInUser.email,
    password: loggedInUser.password,
  });

  const [birthGenderEditing, setBirthGenderEditing] = useState(false);
  const [birthGenderEditingData, setBirthGenderEditingData] = useState({
    birthDay: loggedInUser.birthDay,
    gender: loggedInUser.gender,
  });

  let newAction = {
    id: new Date().getTime(),
    what: "",
    when: new Date().toString().slice(0, 24),
    oldData: "",
    change: "",
  };

  // helper function
  function editBirthGender(){
    loggedInUser.birthDay = birthGenderEditingData.birthDay;
    loggedInUser.gender = birthGenderEditingData.gender;

    loggedInUser.actions.push({
      ...newAction,
      what: "Edited birth & gender info",
      oldData: "Old birth day & gender",
      change: "New birth day& gender",
    });

    setBirthGenderEditing(false);
    setBirthGenderEditingData({
      birthDay: loggedInUser.birthDay,
      gender: loggedInUser.gender,
    });

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editMailPass() {
    loggedInUser.email = mailPassEditingData.email;
    loggedInUser.password = mailPassEditingData.password;

    loggedInUser.actions.push({
      ...newAction,
      what: "Edited register info",
      oldData: "Old email and password",
      change: "New email and password",
    });

    setMailPassEditing(false);
    setMailPassEditingData({
      email: loggedInUser.email,
      password: loggedInUser.password,
    });

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editAddressObj() {
    loggedInUser.address.city = addressEditingData.city;
    loggedInUser.address.country = addressEditingData.country;
    loggedInUser.address.number = addressEditingData.number;
    loggedInUser.address.postNr = addressEditingData.postNr;
    loggedInUser.address.street = addressEditingData.street;

    loggedInUser.actions.push({
      ...newAction,
      what: "Edited ADDRESS",
      oldData: "Old Address",
      change: "New Address",
    });

    setAddressEditing(false);
    setAddressEditingData({
      city: loggedInUser.address.city,
      country: loggedInUser.address.country,
      number: loggedInUser.address.number,
      postNr: loggedInUser.address.postNr,
      street: loggedInUser.address.street,
    });

    console.log("logg", loggedInUser);
    console.log("users", users);
  }
  // edit SURNAME function
  function editSurname() {
    loggedInUser.surname = surnameEditingText;

    loggedInUser.actions.push({
      ...newAction,
      what: "Edited SURNAME",
      oldData: fixed.surname,
      change: surnameEditingText,
    });

    setSurnameEditing(false);
    setSurnameEditingText(loggedInUser.surname);

    updateAllUsers(loggedInUser);

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editName() {
    loggedInUser.name = nameEditingText;

    loggedInUser.actions.push({
      ...newAction,
      what: "Edited NAME",
      oldData: fixed.name,
      change: nameEditingText,
    });

    setNameEditing(false);
    setNameEditingText(loggedInUser.name);

    updateAllUsers(loggedInUser);

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Personal Info</h1>
      <Card>
          <Card.Body className='d-flex '>
            <Card.Title className='p-1'>ID: </Card.Title>
            <Card.Text className='p-1'> {loggedInUser.id}</Card.Text>
          </Card.Body>
        </Card>

      {nameEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) => setNameEditingText(e.target.value)}
                value={nameEditingText}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => editName()}
              className="w-100"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Name:</Card.Title>
            <Card.Text> {loggedInUser.name}</Card.Text>
            <Button
              variant="info"
              onClick={() => setNameEditing(true)}
              className="w-100"
            >
              Edit Name
            </Button>
          </Card.Body>
        </Card>
      )}

      {surnameEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) => setSurnameEditingText(e.target.value)}
                value={surnameEditingText}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => editSurname()}
              className="w-100"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Surame:</Card.Title>
            <Card.Text> {loggedInUser.surname}</Card.Text>
            <Button
              variant="info"
              onClick={() => setSurnameEditing(true)}
              className="w-100"
            >
              Edit Surname
            </Button>
          </Card.Body>
        </Card>
      )}

      {mailPassEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setMailPassEditingData({
                    ...mailPassEditingData,
                    email: e.target.value,
                  })
                }
                value={mailPassEditingData.email}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setMailPassEditingData({
                    ...mailPassEditingData,
                    password: e.target.value,
                  })
                }
                value={mailPassEditingData.password}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => editMailPass()}
              className="w-100"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Email:</Card.Title>
            <Card.Text> {loggedInUser.email}</Card.Text>
            <Card.Title>Password:</Card.Title>
            <Card.Text> {loggedInUser.password}</Card.Text>
            <Button
              variant="info"
              onClick={() => setMailPassEditing(true)}
              className="w-100"
            >
              Edit Email & Password
            </Button>
          </Card.Body>
        </Card>
      )}

      {addressObjEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setAddressEditingData({
                    ...addressEditingData,
                    street: e.target.value,
                  })
                }
                value={addressEditingData.street}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setAddressEditingData({
                    ...addressEditingData,
                    number: e.target.value,
                  })
                }
                value={addressEditingData.number}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setAddressEditingData({
                    ...addressEditingData,
                    city: e.target.value,
                  })
                }
                value={addressEditingData.city}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setAddressEditingData({
                    ...addressEditingData,
                    postNr: e.target.value,
                  })
                }
                value={addressEditingData.postNr}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setAddressEditingData({
                    ...addressEditingData,
                    country: e.target.value,
                  })
                }
                value={addressEditingData.country}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => editAddressObj()}
              className="w-100"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Street:</Card.Title>
            <Card.Text> {loggedInUser.address.street}</Card.Text>
            <Card.Title>Number:</Card.Title>
            <Card.Text> {loggedInUser.address.number}</Card.Text>
            <Card.Title>City:</Card.Title>
            <Card.Text> {loggedInUser.address.city}</Card.Text>
            <Card.Title>Post number:</Card.Title>
            <Card.Text> {loggedInUser.address.postNr}</Card.Text>
            <Card.Title>Country:</Card.Title>
            <Card.Text> {loggedInUser.address.country}</Card.Text>

            <Button
              variant="info"
              onClick={() => setAddressEditing(true)}
              className="w-100"
            >
              Edit Address
            </Button>
          </Card.Body>
        </Card>
      )}

{birthGenderEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setBirthGenderEditingData({
                    ...birthGenderEditingData,
                    birthDay: e.target.value,
                  })
                }
                value={birthGenderEditingData.birthDay}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setBirthGenderEditingData({
                    ...birthGenderEditingData,
                    gender: e.target.value,
                  })
                }
                value={birthGenderEditingData.gender}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => editBirthGender()}
              className="w-100"
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Date of birth:</Card.Title>
            <Card.Text> {loggedInUser.birthDay}</Card.Text>
            <Card.Title>Gender:</Card.Title>
            <Card.Text> {loggedInUser.gender}</Card.Text>
            <Button
              variant="info"
              onClick={() => setBirthGenderEditing(true)}
              className="w-100"
            >
              Edit Birth day & Gender
            </Button>
          </Card.Body>
        </Card>
      )}
      <div style={{ border: "1px solid grey" }}>
        {loggedInUser.actions.map((action, i) => {
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
