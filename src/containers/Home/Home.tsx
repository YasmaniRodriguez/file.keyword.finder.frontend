import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import DragDrop from "../../components/DragDrop/DragDrop";
import Warranty from "../../components/Warranty/Warranty";
import OrderWrapper from "../../components/OrderWrapper/OrderWrapper";
import { AppContext } from "../../contexts/AppContext";
import { Box } from "@mui/material";

const Home = () => {
  const appCtx = useContext(AppContext);
  return (
    <StyledHome>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          background: "#e2e2e2",
          position: "relative",
        }}
      >
        {appCtx?.order ? <OrderWrapper /> : <DragDrop />}
      </Box>

      <Warranty />
    </StyledHome>
  );
};

export default Home;
