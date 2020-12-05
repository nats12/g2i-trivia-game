import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";

import * as questionsActions from "../../store/actions/questions";
import { colours } from "../../theme/colours";
import { IQuestionsState } from "../../types/StateTypes";
import { StyledButton } from "../styled/Button";
import { CentredContainer } from "../styled/CentredContainer";
import QuestionCard from "../styled/QuestionCard";
import { ScreenContainer } from "../styled/ScreenContainer";
import { StyledH2 } from "../styled/ScreenHeadings";
import StyledLoader from "../StyledLoader";

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

export const Quiz = ({
  questions,
  currentQuestion,
  updateCurrentQuestion,
}: any) => {
  if (questions.questions.length === 0 || !questions.questions) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  const nextQuestion = () => {
    updateCurrentQuestion();
  };

  console.log(questions.questions);

  return (
    <ScreenContainer data-test="component-quiz">
      <Container>
        <Row xs={12}>
          <Col>
            <QuizInnerContainer>
              {currentQuestion > questions.questions.length - 1 ? (
                "test"
              ) : (
                <>
                  <StyledH2>
                    {questions.questions[currentQuestion].category}
                  </StyledH2>
                  <QuestionCard
                    key={currentQuestion}
                    questionNumber={currentQuestion}
                  >
                    {questions.questions[currentQuestion].question}
                  </QuestionCard>
                  <ButtonsContainer>
                    <StyledButton
                      onClick={nextQuestion}
                      border={colours.green}
                      backgroundColour={colours.green}
                    >
                      True
                    </StyledButton>
                    <StyledButton
                      onClick={nextQuestion}
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
  questions: state.questions,
  currentQuestion: state.questions.currentQuestion,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCurrentQuestion: (id: number) => {
      dispatch(questionsActions.updateCurrentQuestion());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
