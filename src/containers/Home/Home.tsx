import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Drop from "../../components/Drop/Drop";
import Warranty from "../Warranty/Warranty";
import Order from "../Order/Order";
import { AppContext } from "../../contexts/AppContext";
import { Box } from "@mui/material";

const Home = () => {
  const appCtx = useContext(AppContext);
  return (
    <StyledHome>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          position: "relative",
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
