import React, { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import * as questionsActions from "../store/actions/questions";
import * as resultsActions from "../store/actions/results";
import "../App.css";
import { Results } from "./screens/Results";
import { connect, useDispatch } from "react-redux";
import { Quiz } from "./screens/Quiz";
import { Home } from "./screens/Home";

export function App({
  questions,
  currentQuestion,
  error,
  results,
  updateCurrentQuestion,
  updateResults,
  resetQuiz,
  fetchQuestions,
  resetCurrentQuestion,
}: any) {
  const history: any = createBrowserHistory();

  const dispatch = useDispatch();

  const fetchQs = useCallback(() => {
    try {
      dispatch(questionsActions.fetch());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQs();
  }, [fetchQs]);

  return (
    <Switch data-test="component-app">
      <Route exact path="/">
        <Home
          resetQuiz={resetQuiz}
          questions={questions}
          error={error}
          fetchQuestions={fetchQuestions}
          resetCurrentQuestion={resetCurrentQuestion}
        />
      </Route>
      <Route path="/quiz">
        <Quiz
          questions={questions}
          results={results}
          error={error}
          currentQuestion={currentQuestion}
          updateCurrentQuestion={updateCurrentQuestion}
          updateResults={updateResults}
          resetQuiz={resetQuiz}
        />
      </Route>
      <Route path="/results">
        <Results results={results} error={error} />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state: any, ownProps: any) => ({
  questions: state.questions.questions,
  currentQuestion: state.questions.currentQuestion,
  error: state.errors.error,
  results: state.results.results,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCurrentQuestion: (id: number) => {
      dispatch(questionsActions.updateCurrentQuestion());
    },
    updateResults: (
      id: number,
      question: string,
      correct_answer: string,
      given_answer: string
    ) => {
      dispatch(
        resultsActions.updateResults(id, question, correct_answer, given_answer)
      );
    },
    resetQuiz: () => {
      dispatch(resultsActions.resetResults());
    },
    fetchQuestions: () => {
      dispatch(questionsActions.fetch());
    },
    resetCurrentQuestion: () => {
      dispatch(questionsActions.resetCurrentQuestion());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
