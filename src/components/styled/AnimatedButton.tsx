import styled from "styled-components";
import { colours } from "../../theme/colours";
import { StyledButton } from "./Button";

export const AnimatedButton = styled(StyledButton)`
  position: relative;
  overflow: hidden;

  a {
    position: relative;
    z-index: 2000;
  }

  &:after {
    background: ${colours.primary};
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
`;
