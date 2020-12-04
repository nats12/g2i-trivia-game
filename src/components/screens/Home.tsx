import React, { useCallback, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import * as questionsActions from "../../store/actions/questions";
import { IState } from "../../store/reducers/questions";

export const Home = ({ questions }: any) => {
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

  if (questions.length === 0) {
    return <h1 data-test="component-loading">loading...</h1>;
  }

  return (
    <div data-test="component-home">
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state: IState, ownProps: any) => ({
  questions: state.questions,
});

export default connect(mapStateToProps)(Home);
