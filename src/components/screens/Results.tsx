import React from "react";
import { connect } from "react-redux";
import { Error } from "../Error";
import { CentredContainer } from "../styled/CentredContainer";
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

  return <p data-test="component-results">Results</p>;
};

const mapStateToProps = (state: any) => {
  return {
    results: state.questions.results,
    error: state.errors.error,
  };
};

export default connect(mapStateToProps)(Results);
