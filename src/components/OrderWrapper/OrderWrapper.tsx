import React from "react";
import { Box, Typography } from "@mui/material";
import OrderWidget from "../Order/Order";
import StyledOrderWrapper from "./StyledOrderWrapper";

const OrderWrapper = () => {
  return (
    <StyledOrderWrapper>
      <OrderWidget />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography variant="h5" component={"h5"}>
          Everything is ready to go
        </Typography>
        <Typography>Absolutely amazing!</Typography>
      </Box>
    </StyledOrderWrapper>
  );
};

export default OrderWrapper;
