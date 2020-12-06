import styled from "styled-components";

type IButton = {
  backgroundColour?: string;
  color?: string;
  border?: string;
  focusColour?: string;
};

export const StyledButton = styled.button<IButton>`
  text-transform: uppercase;
  background-color: ${(props) => props.backgroundColour || "transparent"};
  color: ${(props) => props.color || "white"};
  border: ${(props) => `1px solid ${props.border}` || "none"};
  border-radius: 5px;
  padding: 20px 50px;
  margin: 20px;
  font-size: 1em;
  font-weight: 600;

  a {
    text-decoration: none;
    color: ${(props) => props.color || "white"};
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
    background-color: transparent;
    color: ${(props) => props.focusColour || "white"};
    border: ${(props) => `2px solid ${props.border}` || "1px solid"};
  }
`;
