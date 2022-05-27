import React from "react";
import { Box, Typography } from "@mui/material";
import Order from "../Order/Order";
import StyledOrderWrapper from "./StyledOrderWrapper";

const OrderWrapper = () => {
  return (
    <StyledOrderWrapper>
      <Order />
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
