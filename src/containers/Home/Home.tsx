import React, { useContext } from "react";
import StyledHome from "./StyledHome";
import Copywriting from "../../components/Copywriting/Copywriting";
import UploadWrapper from "../../components/UploadWrapper/UploadWrapper";
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
        {appCtx?.order ? <OrderWrapper /> : <UploadWrapper />}
      </Box>
      <Copywriting
        header={
          appCtx?.order ? "Everything is ready to go" : "Let's do it together"
        }
        subheader={appCtx?.order ? "Absolutely amazing!" : "I'm very anxious"}
      />
      <Warranty />
    </StyledHome>
  );
};

export default Home;
