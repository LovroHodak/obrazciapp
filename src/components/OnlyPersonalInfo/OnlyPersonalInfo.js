import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, ListGroup } from "react-bootstrap";

import { useUsers } from "../../hooks/use-users";

export default function OnlyPersonalInfo() {
  // hooks
  const { loggedInUser, users, updateAllUsers } = useUsers();

  // STATES
  // fixed state - for old data
  const [fixed, setFixed] = useState({});

  useEffect(() => {
    let imutableData = JSON.parse(JSON.stringify(loggedInUser));
    setFixed(imutableData);
    console.log(imutableData);
  }, []);

  // states - input
  const [nameSurnamEditing, setNameSurnameEditing] = useState(false);
  const [nameSurnameEditingData, setNameSurnameEditingData] = useState({
    name: loggedInUser.name,
    surname: loggedInUser.surname,
  });
  const [mailPassEditing, setMailPassEditing] = useState(false);
  const [mailPassEditingData, setMailPassEditingData] = useState({
    email: loggedInUser.email,
    password: loggedInUser.password,
  });
  const [addressObjEditing, setAddressEditing] = useState(false);
  const [addressEditingData, setAddressEditingData] = useState({
    city: loggedInUser.address.city,
    country: loggedInUser.address.country,
    number: loggedInUser.address.number,
    postNr: loggedInUser.address.postNr,
    street: loggedInUser.address.street,
  });
  const [birthGenderEditing, setBirthGenderEditing] = useState(false);
  const [birthGenderEditingData, setBirthGenderEditingData] = useState({
    birthDay: loggedInUser.birthDay,
    gender: loggedInUser.gender,
  });

  // new OBJECT - on spot
  let newAction = {
    id: new Date().getTime(),
    when: new Date().toString().slice(0, 24),
  };

  // FUNCTIONS
  // helper function
  function editNameSurname() {
    loggedInUser.name = nameSurnameEditingData.name;
    loggedInUser.surname = nameSurnameEditingData.surname;
    loggedInUser.actions.push({
      ...newAction,
      what: `Change created at name and surname`,
      userNamee: loggedInUser.name,
      userSurnamee: loggedInUser.surname,
      oldUserNamee: fixed.name,
      oldUserSurnamee: fixed.surname 
    });

    updateAllUsers(loggedInUser);

    setNameSurnameEditing(false);
    setNameSurnameEditingData({
      name: loggedInUser.name,
      surname: loggedInUser.surname,
    });

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editMailPass() {
    loggedInUser.email = mailPassEditingData.email;
    loggedInUser.password = mailPassEditingData.password;
    loggedInUser.actions.push({
      ...newAction,
      what: `Change created at email and password`,
      userEmaill: loggedInUser.email,
      userPasswordd: loggedInUser.password,
      oldUserEmaill: fixed.email,
      oldUserPasswordd: fixed.password 
    });

    updateAllUsers(loggedInUser);

    setMailPassEditing(false);
    setMailPassEditingData({
      email: loggedInUser.email,
      password: loggedInUser.password,
    });

    console.log("logg", loggedInUser);
    console.log("users", users);
  }

  function editBirthGender() {
    loggedInUser.birthDay = birthGenderEditingData.birthDay;
    loggedInUser.gender = birthGenderEditingData.gender;
    loggedInUser.actions.push({
      ...newAction,
      what: `Change  created at birth day and gender`,
      userBirthdayy: loggedInUser.birthDay,
      userGenderr: loggedInUser.gender,
      oldUserBirthdayy: fixed.birthDay,
      oldUserGenderr: fixed.gender 
    });

    updateAllUsers(loggedInUser);

    setBirthGenderEditing(false);
    setBirthGenderEditingData({
      birthDay: loggedInUser.birthDay,
      gender: loggedInUser.gender,
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
      what: `Changed address`,
      userStreett: loggedInUser.address.street,
      oldUserStreett: fixed.address.street,
      userNumberr: loggedInUser.address.number,
      oldUserNumberr: fixed.address.number,
      userCityy: loggedInUser.address.city,
      oldUserCityy: fixed.address.city,
      userPostNrr: loggedInUser.address.postNr,
      oldUserPostNrr: fixed.address.postNr,
      userCountryy: loggedInUser.address.country,
      oldUserCountryy: fixed.address.country
    });

    updateAllUsers(loggedInUser);

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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Personal Info</h1>
      <Card>
        <Card.Body className="d-flex ">
          <Card.Title className="p-1">ID: </Card.Title>
          <Card.Text className="p-1"> {loggedInUser.id}</Card.Text>
        </Card.Body>
      </Card>

      {nameSurnamEditing ? (
        <Card>
          <Card.Body>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNameSurnameEditingData({
                    ...nameSurnameEditingData,
                    name: e.target.value,
                  })
                }
                value={nameSurnameEditingData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNameSurnameEditingData({
                    ...nameSurnameEditingData,
                    surname: e.target.value,
                  })
                }
                value={nameSurnameEditingData.surname}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => editNameSurname()}
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
            <Card.Title>Surname:</Card.Title>
            <Card.Text> {loggedInUser.surname}</Card.Text>
            <Button
              variant="info"
              onClick={() => setNameSurnameEditing(true)}
              className="w-100"
            >
              Edit Name & Surname
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
    </div>
  );
}
