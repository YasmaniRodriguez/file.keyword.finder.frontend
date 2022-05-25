import React from "react";
import StyledMain from "./StyledMain";

interface Props {
  children: JSX.Element;
}
const Main = (props: Props) => {
  return <StyledMain>{props.children}</StyledMain>;
};

export default Main;
