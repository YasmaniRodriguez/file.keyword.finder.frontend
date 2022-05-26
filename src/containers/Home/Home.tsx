import React from "react";
import StyledHome from "./StyledHome";
import Drop from "../../components/Drop/Drop";
import Warranty from "../Warranty/Warranty";

const Home = () => {
  return (
    <StyledHome>
      <Drop />
      <Warranty />
    </StyledHome>
  );
};

export default Home;
