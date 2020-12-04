import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "../App.css";
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
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
