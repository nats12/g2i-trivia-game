import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import * as questionsActions from "../../store/actions/questions";
import * as resultsActions from "../../store/actions/results";
import { colours } from "../../theme/colours";
import { StyledButton } from "../styled/Button";
import { CentredContainer } from "../styled/CentredContainer";
import QuestionCard from "../styled/QuestionCard";
import { ScreenContainer } from "../styled/ScreenContainer";
import { StyledH2 } from "../styled/ScreenHeadings";
import StyledLoader from "../StyledLoader";
import Question from "../../models/Question";
import { Error } from "../Error";
import { Results } from "./Results";
import { devices } from "../../theme/devices";
import { ICombinedStates } from "../../interfaces/StateInterfaces";

const QuizInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;

  @media ${devices.laptop} {
    justify-content: space-around;
  }

  .card {
    width: 100% !important;
  }
`;

const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const CardContainer = styled.div`
  min-height: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;
export const Quiz: React.FC<any> = ({
  questions,
  currentQuestion,
  updateCurrentQuestion,
  updateResults,
  resetQuiz,
  results,
  error,
}: any = []) => {
  if (error && error !== null && error !== "") {
    return (
      <CentredContainer data-test="component-error">
        <Error>{error}</Error>
      </CentredContainer>
    );
  }

  if (questions && questions.length === 0 && error === null) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  if (results && results.length === questions.length) {
    return <Results results={results} error={error} resetQuiz={resetQuiz} />;
  }

  const nextQuestion = (e: any, question: Question, answer: string) => {
    e.preventDefault();
    updateCurrentQuestion();
    updateResults(question.id, question.text, question.correct_answer, answer);
  };

  return (
    <ScreenContainer data-test="component-quiz">
      <Container>
        <Row>
          <Col
            xs={12}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
            xl={8}
          >
            <QuizInnerContainer>
              {currentQuestion > questions?.length - 1 ? (
                <Results
                  results={results}
                  error={error}
                  resetQuiz={resetQuiz}
                />
              ) : (
                <>
                  <StyledH2>{questions[currentQuestion]?.category}</StyledH2>
                  <CardContainer>
                    <QuestionCard
                      key={currentQuestion}
                      questionNumber={currentQuestion}
                    >
                      <ReactMarkdown>
                        {questions[currentQuestion]?.text}
                      </ReactMarkdown>
                    </QuestionCard>
                  </CardContainer>
                  <ButtonsContainer>
                    <StyledButton
                      onClick={(e) =>
                        nextQuestion(e, questions[currentQuestion], "True")
                      }
                      border={colours.green}
                      backgroundColour={colours.green}
                    >
                      True
                    </StyledButton>
                    <StyledButton
                      onClick={(e) =>
                        nextQuestion(e, questions[currentQuestion], "False")
                      }
                      border={colours.red}
                      backgroundColour={colours.red}
                    >
                      False
                    </StyledButton>
                  </ButtonsContainer>
                </>
              )}
            </QuizInnerContainer>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: ICombinedStates) => ({
  questions: state.questions?.questions,
  currentQuestion: state.questions?.currentQuestion,
  results: state.results?.results,
  error: state.errors?.error,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
