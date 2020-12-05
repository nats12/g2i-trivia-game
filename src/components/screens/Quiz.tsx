import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { IQuestionsState } from "../../types/StateTypes";
import { CentredContainer } from "../styled/CentredContainer";
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
  display: flex;
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
