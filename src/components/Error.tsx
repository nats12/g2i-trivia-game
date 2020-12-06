import React from "react";
import { ScreenHeading } from "./styled/ScreenHeading";
import { colours } from "../theme/colours";

interface IError {
  props?: any;
  children?: any;
}
export const Error: React.FC = (props: IError) => {
  return (
    <>
      <div>
        <ScreenHeading style={{ color: colours.red }}>
          {props.children}
        </ScreenHeading>
      </div>
      <small>Please refresh and try again.</small>
    </>
  );
};
