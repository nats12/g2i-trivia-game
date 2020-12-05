import React from "react";
import { Card } from "react-bootstrap";

const QuestionCard = (props: any) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
      <small>1 of 10</small>
    </>
  );
};

export default QuestionCard;
