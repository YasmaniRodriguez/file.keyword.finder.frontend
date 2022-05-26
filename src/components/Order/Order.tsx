import React from "react";
import StyledOrder from "./StyledOrder";
import ReportWidget from "../ReportWidget/ReportWidget";
import KeywordWidget from "../KeywordWidget/KeywordWidget";
const OrderWidget = () => {
  return (
    <StyledOrder>
      <ReportWidget />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default OrderWidget;
