import styled from "styled-components";
import { colours } from "../../theme/colours";

export const ScreenContainer = styled.div<any>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.backgroundColour || colours.primary};
  overflow: auto;
  box-sizing: border-box;
  text-align: center;
`;
