import React from "react";
import StyledOrder from "./StyledOrder";
import RecordWidget from "../RecordWidget/RecordWidget";
import KeywordWidget from "../KeywordWidget/KeywordWidget";

const Order = () => {
  return (
    <StyledOrder>
      <RecordWidget
        record="9D7eHzOGSVd55iVNFeEBewkM5CA2"
        files={1000}
        amount={10000}
      />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default Order;
