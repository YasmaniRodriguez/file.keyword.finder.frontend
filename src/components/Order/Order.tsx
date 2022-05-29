import React from "react";
import StyledOrder from "./StyledOrder";
import Preview from "../Preview/Preview";
import KeywordWidget from "../KeywordWidget/KeywordWidget";

const Order = () => {
  return (
    <StyledOrder>
      <Preview />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default Order;
