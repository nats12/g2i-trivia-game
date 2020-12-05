import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
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

export const Quiz = ({ questions }: any) => {
  if (questions.length === 0 || !questions) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  return (
    <ScreenContainer data-test="component-quiz">
      <Container>
        <Row xs={12}>
          <Col>
            <QuizInnerContainer>
              <StyledH2>Enterainment: Video Games</StyledH2>
              <QuestionCard>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis laboriosam ex beatae labore earum ipsa suscipit
                explicabo temporibus odit delectus hic, minima in dignissimos.
                Incidunt non ut optio officiis sint?
              </QuestionCard>
              <ButtonsContainer>
                <StyledButton
                  border={colours.green}
                  backgroundColour={colours.green}
                >
                  True
                </StyledButton>
                <StyledButton
                  border={colours.red}
                  backgroundColour={colours.red}
                >
                  False
                </StyledButton>
              </ButtonsContainer>
            </QuizInnerContainer>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: IQuestionsState, ownProps: any) => ({
  questions: state.questions,
});

export default connect(mapStateToProps)(Quiz);
