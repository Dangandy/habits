// global imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// local imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Workout from "./pages/Workout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Workout" component={Workout} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
