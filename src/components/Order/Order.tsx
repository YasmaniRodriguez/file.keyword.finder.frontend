import React from "react";
import StyledOrder from "./StyledOrder";
import Record from "../Record/Record";
import Keyword from "../Keyword/Keyword";

interface Props {}

const Order = (props: Props) => {
  return (
    <StyledOrder>
      <Record />
      <Keyword />
    </StyledOrder>
  );
};

export default Order;
