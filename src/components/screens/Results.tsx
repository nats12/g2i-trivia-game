import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

import { colours } from "../../theme/colours";
import { Error } from "../Error";
import { CentredContainer } from "../styled/CentredContainer";
import { ScreenContainer } from "../styled/ScreenContainer";
import { StyledH2 } from "../styled/ScreenHeadings";
import StyledLoader from "../StyledLoader";
import {
  ResultRow,
  ResultRowIconContainer,
  ResultRowQuestion,
} from "../styled/ResultRow";
import { StyledButton } from "../styled/Button";
import { Link, Redirect } from "react-router-dom";
import * as resultsActions from "../../store/actions/results";
import { AnimatedButton } from "../styled/AnimatedButton";

const ResultsInnerContainer = styled.div`
  background-color: white;
`;

const ResultsHeader = styled.header`
  background-color: ${colours.primary};
`;

export const Results = ({ results, error }: any) => {
  if (error !== null && error !== "") {
    return (
      <CentredContainer data-test="component-error">
        <Error>{error}</Error>
      </CentredContainer>
    );
  }

  if (results.length === 0 && error === null) {
    return (
      <CentredContainer>
        <StyledLoader data-test="component-loading" />
      </CentredContainer>
    );
  }

  return (
    <ScreenContainer data-test="component-results" backgroundColour="white">
      <ResultsHeader>
        <StyledH2>
          You scored{" "}
          {
            results.filter((r: any) => {
              return r.correct_answer === r.given_answer;
            }).length
          }{" "}
          / {results.length}
        </StyledH2>
      </ResultsHeader>
      <Container>
        <Row>
          <Col xs={12}>
            <ResultsInnerContainer>
              {results &&
                results.map((r: any, key: number) => {
                  return (
                    <ResultRow key={key}>
                      <ResultRowIconContainer>
                        {r.correct_answer === r.given_answer ? (
                          <AiOutlinePlus className="correct" />
                        ) : (
                          <AiOutlineMinus className="incorrect" />
                        )}
                      </ResultRowIconContainer>
                      <ResultRowQuestion>
                        <ReactMarkdown>{r.question}</ReactMarkdown>
                      </ResultRowQuestion>
                    </ResultRow>
                  );
                })}
            </ResultsInnerContainer>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <AnimatedButton
              border={colours.primary}
              backgroundColour={colours.primary}
              focusColour={colours.primary}
            >
              <Link to="/">Play again</Link>
            </AnimatedButton>
          </Col>
        </Row>
      </Container>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    results: state.questions.results,
    error: state.errors.error,
  };
};

export default connect(mapStateToProps)(Results);
