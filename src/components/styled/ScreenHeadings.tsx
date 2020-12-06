import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: white;
  padding: 0 50px;
`;

export const StyledH2 = styled.h2<any>`
  color: ${(props) => props.colour || "white"};
  padding: 20px;
`;
