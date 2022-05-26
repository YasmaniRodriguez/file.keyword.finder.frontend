import React from "react";
import StyledWarranty from "./StyledWarranty";
import { Box } from "@mui/material";
interface Props {}
const Warranty = (props: Props) => {
  return (
    <StyledWarranty>
      <Box sx={{ flexGrow: 1 }}></Box>
      <span></span>
      <Box sx={{ flexGrow: 1, border: "solid 1px red" }}></Box>
      <span></span>
      <Box sx={{ flexGrow: 1 }}></Box>
    </StyledWarranty>
  );
};

export default Warranty;
