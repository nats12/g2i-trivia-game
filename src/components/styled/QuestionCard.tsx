import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { colours } from "../../theme/colours";

const QuestionCardNumbers = styled.div`
  div {
    margin: 20px 0;
    font-size: 1.1em;
    color: ${colours.light_grey};
  }
`;
const QuestionCard = (props: any) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
      <QuestionCardNumbers>
        <div>{props.questionNumber + 1} of 10</div>
      </QuestionCardNumbers>
    </>
  );
};

export default QuestionCard;
