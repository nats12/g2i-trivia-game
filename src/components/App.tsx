import React, { useCallback, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import * as questionsActions from "../store/actions/questions";
import "../App.css";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Results from "./screens/Results";
import { useDispatch, useSelector } from "react-redux";
import { IQuestionsState } from "../interfaces/StateInterfaces";

function App() {
  const history = createBrowserHistory();

  const dispatch = useDispatch();

  const fetchQuestions = useCallback(() => {
    try {
      dispatch(questionsActions.fetch());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

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
