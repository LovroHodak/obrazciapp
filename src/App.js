import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { UsersProvider } from "./hooks/use-users";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import AddPersonalInfo from "./components/AddPersonalInfo/AddPersonalInfo";
import AddExams from "./components/AddExams/AddExams";
import OnlyPersonalInfo from "./components/OnlyPersonalInfo/OnlyPersonalInfo";
import FeedChangesDetail from "./components/FeedChangesDetail.js/FeedChangesDetail";
import SeeAllChanges from "./components/SeeAllChanges/SeeAllChanges";

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
              path="/addPersonalInfo"
              render={() => {
                return <AddPersonalInfo />;
              }}
            />
            <Route
              exact
              path="/onlyPersonalInfo"
              render={() => {
                return <OnlyPersonalInfo />;
              }}
            />
            <Route
              exact
              path="/feedChangesDetail/:id"
              render={(routeProps) => {
                return <FeedChangesDetail {...routeProps} />;
              }}
            />
            <Route
              exact
              path="/addExams"
              render={() => {
                return <AddExams />;
              }}
            />
            <Route
              exact
              path="/seeAllChanges"
              render={() => {
                return <SeeAllChanges />;
              }}
            />
          </React.Fragment>
        </Switch>
      </div>
    </UsersProvider>
  );
}

export default withRouter(App);
