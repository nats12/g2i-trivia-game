import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { colours } from "../theme/colours";

const StyledLoader: React.FC = () => {
  return <PulseLoader size={40} color={colours.primary} loading={true} />;
};

export default StyledLoader;
