import styled from "styled-components";
import { devices } from "../../theme/devices";

export const HalfCircleBackground = styled.div`
  background: white;
  width: 250px;
  height: 250px;
  border-radius: 250px;
  max-width: 250px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devices.laptop} {
    padding-top: 0;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
