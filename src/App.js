import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { UsersProvider } from "./hooks/use-users";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import AddPersonalInfo from "./components/AddPersonalInfo/AddPersonalInfo";
import AddExams from "./components/AddExams/AddExams";

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Login />;
            }}
          />
          <Route
            exact
            path="/register"
            render={() => {
              return <Register />;
            }}
          />
          <React.Fragment>
            <Navbar />
            <Route
              exact
              path="/home"
              render={() => {
                return <Home />;
              }}
            />
            <Route
              exact
              path="/detail"
              render={() => {
                return <Detail />;
              }}
            />
            <Route
              exact
              path="/addPersonalInfo"
              render={() => {
                return <AddPersonalInfo />;
              }}
            />
            <Route
              exact
              path="/addExams"
              render={() => {
                return <AddExams />;
              }}
            />
          </React.Fragment>
        </Switch>
      </div>
    </UsersProvider>
  );
}

export default withRouter(App);
