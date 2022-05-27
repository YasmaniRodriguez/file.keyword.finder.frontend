import React from "react";
import StyledOrder from "./StyledOrder";
import ReportWidget from "../ReportWidget/ReportWidget";
import KeywordWidget from "../KeywordWidget/KeywordWidget";

const Order = () => {
  return (
    <StyledOrder>
      <ReportWidget />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default Order;
