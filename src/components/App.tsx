import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "../App.css";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history} data-test="component-app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
