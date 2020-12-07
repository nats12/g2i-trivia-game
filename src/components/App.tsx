import React, { useCallback, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import * as questionsActions from "../store/actions/questions";
import * as resultsActions from "../store/actions/results";
import * as errorsActions from "../store/actions/error";
import "../App.css";
import { Results } from "./screens/Results";
import { connect } from "react-redux";
import { Quiz } from "./screens/Quiz";
import { Home } from "./screens/Home";
import { ICombinedStates } from "../interfaces/StateInterfaces";
import { CentredContainer } from "./styled/CentredContainer";
import { Error } from "./Error";

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
  setError,
}: any) {
  const fetchQs = useCallback(() => {
    try {
      fetchQuestions();
    } catch (err) {
      setError("Application error");
    }
  }, [fetchQuestions, setError]);

  useEffect(() => {
    fetchQs();
  }, [fetchQs]);

  if (error !== null && error !== "") {
    return (
      <CentredContainer data-test="component-error">
        <Error>{error}</Error>
      </CentredContainer>
    );
  }

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

const mapStateToProps = (state: ICombinedStates) => ({
  questions: state.questions?.questions,
  currentQuestion: state.questions?.currentQuestion,
  error: state.errors?.error,
  results: state.results?.results,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCurrentQuestion: () => {
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
    setError: (msg: string) => {
      dispatch(errorsActions.setError(msg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
