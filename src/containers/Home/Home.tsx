import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Drop from "../../components/Drop/Drop";
import Warranty from "../Warranty/Warranty";
import Order from "../../components/Order/Order";
import { AppContext } from "../../contexts/AppContext";
import { Box } from "@mui/material";

const Home = () => {
  const appCtx = useContext(AppContext);
  return (
    <StyledHome>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          background: "#e2e2e2",
        }}
      >
        {appCtx?.order ? <Order /> : <Drop />}
      </Box>
      <Warranty />
    </StyledHome>
  );
};

export default Home;
