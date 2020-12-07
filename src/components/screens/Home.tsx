import React, { useCallback, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import * as resultsActions from "../../store/actions/results";
import * as questionsActions from "../../store/actions/questions";
import { ScreenContainer } from "../styled/ScreenContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ScreenHeading } from "../styled/ScreenHeading";
import styled from "styled-components";
import { StyledButton } from "../styled/Button";
import { colours } from "../../theme/colours";
import { HalfCircleBackground } from "../styled/HalfCircleBackground";
import StyledLoader from "../StyledLoader";
import { CentredContainer } from "../styled/CentredContainer";
import { Link } from "react-router-dom";
import { IQuestionsState } from "../../interfaces/StateInterfaces";
import { Error } from "../Error";

const HomeTopContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-content: space-between;
  height: 65vh;
`;
const HomeBottomContainer = styled.div`
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Home = ({
  questions,
  error,
  results,
  resetQuiz,
  fetchQuestions,
  resetCurrentQuestion,
}: any = []) => {
  useEffect(() => {
    fetchQuestions();
    resetQuiz();
    resetCurrentQuestion();
  }, [fetchQuestions, resetCurrentQuestion, resetQuiz]);

  if (error !== null && error !== "") {
    return (
      <CentredContainer data-test="component-error">
        <Error>{error}</Error>
      </CentredContainer>
    );
  }

  if (questions.length === 0) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  return (
    <ScreenContainer data-test="component-home">
      <Container>
        <Row xs={12}>
          <Col>
            <HomeTopContainer>
              <ScreenHeading>Welcome to the Trivia Challenge!</ScreenHeading>
              <h2>You will be presented with 10 True or False questions.</h2>
              <h2>Can you score 100%?</h2>
            </HomeTopContainer>
            <HomeBottomContainer>
              <HalfCircleBackground>
                <StyledButton
                  backgroundColour={colours.primary}
                  border={colours.primary}
                >
                  <Link to="/quiz">Begin</Link>
                </StyledButton>
              </HalfCircleBackground>
            </HomeBottomContainer>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  questions: state.questions.questions,
  error: state.errors.error,
  results: state.results.results,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
