import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { UsersProvider } from "./hooks/use-users";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

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
          </React.Fragment>
        </Switch>
      </div>
    </UsersProvider>
  );
}

export default withRouter(App);
