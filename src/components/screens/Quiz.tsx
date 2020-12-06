import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";

import * as questionsActions from "../../store/actions/questions";
import { colours } from "../../theme/colours";
import { IQuestionsState } from "../../interfaces/StateInterfaces";
import { StyledButton } from "../styled/Button";
import { CentredContainer } from "../styled/CentredContainer";
import QuestionCard from "../styled/QuestionCard";
import { ScreenContainer } from "../styled/ScreenContainer";
import { StyledH2 } from "../styled/ScreenHeadings";
import StyledLoader from "../StyledLoader";
import Question from "../../models/Question";
import { Error } from "../Error";

const QuizInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

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
`;
export const Quiz = ({
  questions,
  currentQuestion,
  updateCurrentQuestion,
  updateResults,
  results,
  error,
}: any = []) => {
  if (error !== null && error !== "") {
    return (
      <CentredContainer data-test="component-error">
        <Error>{error}</Error>
      </CentredContainer>
    );
  }

  if (questions.length === 0 && error === null) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  const nextQuestion = (question: Question, answer: string) => {
    updateCurrentQuestion();
    updateResults(question.id, question.text, question.correct_answer, answer);
  };

  return (
    <ScreenContainer data-test="component-quiz">
      <Container>
        <Row xs={12}>
          <Col>
            <QuizInnerContainer>
              {currentQuestion > questions.length - 1 ? (
                "test"
              ) : (
                <>
                  <StyledH2>{questions[currentQuestion]?.category}</StyledH2>
                  <CardContainer>
                    <QuestionCard
                      key={currentQuestion}
                      questionNumber={currentQuestion}
                    >
                      {questions[currentQuestion]?.text}
                    </QuestionCard>
                  </CardContainer>
                  <ButtonsContainer>
                    <StyledButton
                      onClick={() =>
                        nextQuestion(questions[currentQuestion], "True")
                      }
                      border={colours.green}
                      backgroundColour={colours.green}
                    >
                      True
                    </StyledButton>
                    <StyledButton
                      onClick={() =>
                        nextQuestion(questions[currentQuestion], "False")
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

const mapStateToProps = (state: any, ownProps: any) => ({
  questions: state.questions.questions,
  currentQuestion: state.questions.currentQuestion,
  results: state.questions.results,
  error: state.errors.error,
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
        questionsActions.updateResults(
          id,
          question,
          correct_answer,
          given_answer
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
