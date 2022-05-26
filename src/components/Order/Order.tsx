import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import StyledOrder from "./StyledOrder";

const Order = () => {
  return (
    <StyledOrder>
      <Paper
        elevation={0}
        sx={{
          width: "80%",
          minHeight: "80%",
          display: "flex",
          flexWrap: "wrap",
          "& div": { flex: "350px", height: "70vh", width: "auto" },
        }}
      >
        <Box sx={{ border: "solid 1px black" }}></Box>
        <Box sx={{ border: "solid 1px blue" }}></Box>
      </Paper>
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
    </StyledOrder>
  );
};

export default Order;
