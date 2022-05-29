import React from "react";
import StyledOrder from "./StyledOrder";
import RecordWidget from "../RecordWidget/RecordWidget";
import KeywordWidget from "../KeywordWidget/KeywordWidget";

const Order = () => {
  return (
    <StyledOrder>
      <RecordWidget />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default Order;
