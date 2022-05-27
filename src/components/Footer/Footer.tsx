import React from "react";
import StyledFooter from "./StyledFooter";
import { Box, Typography } from "@mui/material";

interface Props {}
const Main = (props: Props) => {
  return (
    <StyledFooter>
      <Box sx={{ margin: "auto" }}>
        <Typography>© 2022 Copyright Alliance</Typography>
      </Box>
    </StyledFooter>
  );
};

export default Main;
