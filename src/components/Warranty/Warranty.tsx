import React from "react";
import StyledWarranty from "./StyledWarranty";
import { theme } from "../../assets/themes";

import { Box } from "@mui/material";
interface Props {}
const Warranty = (props: Props) => {
  return (
    <StyledWarranty>
      <Box sx={{ flexGrow: 1, background: theme.colors.secondary }}></Box>
      <Box sx={{ flexGrow: 1, background: theme.colors.tertiary }}></Box>
      <Box sx={{ flexGrow: 1, background: theme.colors.quaternary }}></Box>
    </StyledWarranty>
  );
};

export default Warranty;
