import styled from "styled-components";
import { devices } from "../../theme/devices";

export const StyledH1 = styled.h1`
  color: white;
  padding: 25px;
  font-size: 2em;
  font-weight: 700;

  @media ${devices.laptop}, ${devices.tablet} {
    padding: 50px;
    font-size: 2.5em;
  }
`;

export const StyledH2 = styled.h2<any>`
  color: ${(props) => props.colour || "white"};
  padding: 20px;
  font-size: 1.5em;
  font-weight: 700;

  @media ${devices.laptop} {
    font-size: 2em;
  }
`;
