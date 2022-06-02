import React, { useState, useContext, useEffect } from "react";
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

  const addKeyword = (keyword: string) => {
    if (order !== undefined) {
      let arr: string[] | undefined = order.keywords;
      arr.push(keyword);
      setOrder({ ...order, keywords: arr });
    }
  };

  const deleteKeyword = async (keyword: string) => {
    if (order !== undefined) {
      let arr = order.keywords;
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

  useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <StyledOrder>
      <Record record={appCtx?.order} files={1000} amount={10000} />
      <Keyword
        keywords={order?.keywords}
        addKeyword={addKeyword}
        deleteKeyword={deleteKeyword}
      />
    </StyledOrder>
  );
};

export default Order;
