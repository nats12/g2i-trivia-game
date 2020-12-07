import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as resultsActions from "../../store/actions/results";
import * as questionsActions from "../../store/actions/questions";
import { ScreenContainer } from "../styled/ScreenContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { colours } from "../../theme/colours";
import { CircleBackground } from "../styled/CircleBackground";
import StyledLoader from "../StyledLoader";
import { CentredContainer } from "../styled/CentredContainer";
import { Link } from "react-router-dom";
import { Error } from "../Error";
import { StyledH1, StyledH2 } from "../styled/ScreenHeadings";
import { devices } from "../../theme/devices";
import { AnimatedButton } from "../styled/AnimatedButton";
import { ICombinedStates } from "../../interfaces/StateInterfaces";

const HomeTopContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-content: space-between;
  height: 65vh;

  @media ${devices.laptop} {
    height: 50vh;
  }
`;

const HomeBottomContainer = styled.div`
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media ${devices.laptop} {
    height: 50vh;
  }
`;

export const Home: React.FC<any> = ({
  questions,
  error,
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
              <StyledH1>Welcome to the Trivia Challenge!</StyledH1>
              <StyledH2>
                You will be presented with 10 True or False questions.
              </StyledH2>
              <StyledH2>Can you score 100%?</StyledH2>
            </HomeTopContainer>
            <HomeBottomContainer>
              <CircleBackground>
                <AnimatedButton backgroundColour="white" border="transparent">
                  <Link
                    style={{ fontSize: "2em", color: colours.primary }}
                    to="/quiz"
                  >
                    Begin
                  </Link>
                </AnimatedButton>
              </CircleBackground>
            </HomeBottomContainer>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: ICombinedStates) => ({
  questions: state.questions?.questions,
  error: state.errors?.error,
  results: state.results?.results,
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
