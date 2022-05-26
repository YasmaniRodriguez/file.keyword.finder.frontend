import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Drop from "../../components/Drop/Drop";
import Warranty from "../Warranty/Warranty";
import Order from "../Order/Order";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const appCtx = useContext(AppContext);
  return (
    <StyledHome>
      {appCtx?.order ? <Order /> : <Drop />}
      <Warranty />
    </StyledHome>
  );
};

export default Home;
