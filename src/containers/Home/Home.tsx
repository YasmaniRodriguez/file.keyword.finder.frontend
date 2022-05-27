import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Copywriting from "../../components/Copywriting/Copywriting";
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
        }}
      >
        {appCtx?.order ? <OrderWrapper /> : <DragDrop />}
      </Box>
      <Copywriting
        header="Everything is ready to go"
        subheader="Absolutely amazing!"
      />
      <Warranty />
    </StyledHome>
  );
};

export default Home;
