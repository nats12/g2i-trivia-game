import React from "react";
import { colours } from "../theme/colours";
import { StyledH2 } from "./styled/ScreenHeadings";

interface IError {
  props?: any;
  children?: any;
}
export const Error: React.FC = (props: IError) => {
  return (
    <>
      <div>
        <StyledH2 style={{ color: colours.red }}>{props.children}</StyledH2>
      </div>
      <small>Please refresh and try again.</small>
    </>
  );
};
