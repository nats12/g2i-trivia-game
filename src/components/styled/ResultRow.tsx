import styled from "styled-components";
import { colours } from "../../theme/colours";

export const ResultRow = styled.div`
  display: flex;
  text-align: justify;
  width: 100%;
  justify-content: space-around;
  margin-top: 1em;
`;

export const ResultRowQuestion = styled.p`
  width: 80%;
`;

export const ResultRowIconContainer = styled.div`
  font-size: 1.5em;

  .correct {
    color: ${colours.green};
  }
  .incorrect {
    color: ${colours.red};
  }
`;
