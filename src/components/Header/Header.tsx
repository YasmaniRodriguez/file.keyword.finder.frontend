import React from "react";
import StyledNavBar from "./StyledHeader";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <StyledNavBar>
      <Box
        sx={{
          flexGrow: 1,
          border: "solid 1px black",
          height: "100%",
          display: "flex",
          "& p": { margin: "auto", fontSize: `${theme.fontSizes.l}` },
        }}
      >
        <Typography>File.Keyword.Finder</Typography>
      </Box>
      <Box sx={{ flexGrow: 2, border: "solid 1px red", height: "100%" }}></Box>
    </StyledNavBar>
  );
};

export default NavBar;
