import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import StyledCopywriting from "./StyledTemplate";

interface Props {}

const Template = (props: Props) => {
  return (
    <StyledCopywriting>
      <Box sx={{ border: "solid 1px black", height: "10%" }}></Box>
      <Box sx={{ display: "flex", height: "90%" }}>
        <Box sx={{ border: "solid 1px black", width: "50%" }}></Box>
        <Box sx={{ border: "solid 1px black", width: "50%" }}></Box>
      </Box>
    </StyledCopywriting>
  );
};

export default Template;
