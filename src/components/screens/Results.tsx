import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Error } from "../Error";
import { CentredContainer } from "../styled/CentredContainer";
import { ScreenContainer } from "../styled/ScreenContainer";
import StyledLoader from "../StyledLoader";

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
    <ScreenContainer data-test="component-results">
      <Container>
        <Row>
          <Col>
            {results &&
              results.map((r: any, key: number) => {
                return (
                  <div key={key}>
                    <p>{r.correct_answer === r.given_answer ? "+" : "-"}</p>
                    <p>{r.question}</p>
                  </div>
                );
              })}
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
