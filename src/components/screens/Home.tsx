import React, { useCallback, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import * as questionsActions from "../../store/actions/questions";
import { IState } from "../../store/reducers/questions";
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

  if (questions.length === 0 || !questions) {
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
                <StyledButton backgroundColour={colours.primary}>
                  Begin
                </StyledButton>
              </HalfCircleBackground>
            </HomeBottomContainer>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: IState, ownProps: any) => ({
  questions: state.questions,
});

export default connect(mapStateToProps)(Home);
