import React, { useContext } from "react";
import StyledOrder from "./StyledOrder";
import RecordWidget from "../RecordWidget/RecordWidget";
import KeywordWidget from "../KeywordWidget/KeywordWidget";
import { AppContext } from "../../contexts/AppContext";
import { Orders } from "../../assets/types";

interface Props {}

const Order = (props: Props) => {
  const appCtx = useContext(AppContext);
  return (
    <StyledOrder>
      <RecordWidget record={appCtx?.order} files={1000} amount={10000} />
      <KeywordWidget />
    </StyledOrder>
  );
};

export default Order;
