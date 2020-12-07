import styled from "styled-components";
import { colours } from "../../theme/colours";
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
  -webkit-animation: pulsing 2s infinite;
  animation: pulsing 2s infinite;

  a {
    position: relative;
    overflow: hidden;

    &:after {
      color: ${colours.primary};
      animation: shine 5s ease-in-out infinite;
      content: "";
      position: absolute;
      top: -110%;
      left: -210%;
      width: 200%;
      height: 200%;
      animation-fill-mode: forwards;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0) 100%
      );
      opacity: 0;
    }

    &:active:after {
      opacity: 0;
    }

    @keyframes shine {
      10% {
        opacity: 1;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
        transition-duration: 0.7s, 0.7s, 0.15s;
        transition-timing-function: ease;
      }
      100% {
        opacity: 0;
        top: -30%;
        left: -30%;
        transition-property: left, top, opacity;
      }
    }
  }

  @-webkit-keyframes pulsing {
    0% {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
    }
    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
    }
  }

  @keyframes pulsing {
    0% {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
    }
    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
    }
  }

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
