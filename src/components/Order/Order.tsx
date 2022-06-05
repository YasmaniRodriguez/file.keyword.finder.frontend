import React, { useState, useContext } from "react";
import StyledOrder from "./StyledOrder";
import Record from "../Record/Record";
import Keyword from "../Keyword/Keyword";
import { AppContext } from "../../contexts/AppContext";
import { Orders } from "../../assets/types";

interface Props {}

const Order = (props: Props) => {
  const appCtx = useContext(AppContext);

  const defaultOrder = {
    name: "9D7eHzOGSVd55iVNFeEBewkM5CA2",
    quantity: 1000,
    amount: 10000,
    keywords: [],
  };

  const [order, setOrder] = useState<Orders | undefined>(defaultOrder);

  const addOrderKeyword = (keyword: string) => {
    if (order !== undefined) {
      let arr: string[] | undefined = order.keywords;
      arr.push(keyword);
      setOrder({ ...order, keywords: arr });
    }
  };

  const deleteOrderKeyword = async (keyword: string) => {
    if (order !== undefined) {
      let arr: string[] | undefined = order.keywords;

      let data = arr.find((row) => row === keyword);
      if (data !== undefined) {
        let i = arr.indexOf(data);
        if (i !== -1) {
          arr.splice(i, 1);
          setOrder({ ...order, keywords: arr });
        }
      }
    }
  };

  return (
    <StyledOrder>
      <Record record={appCtx?.order} files={1000} amount={10000} />
      <Keyword
        orderKeywords={order?.keywords}
        addOrderKeyword={addOrderKeyword}
        deleteOrderKeyword={deleteOrderKeyword}
      />
    </StyledOrder>
  );
};

export default Order;
