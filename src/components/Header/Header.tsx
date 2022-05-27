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
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& h1": {
            fontSize: `${theme.fontSizes.l}`,
            color: theme.colors.tertiary,
            fontWeight: "bold",
          },
        }}
      >
        <Typography component={"h1"} variant="h1">
          Flyers Reader
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 2, height: "100%" }}></Box>
    </StyledNavBar>
  );
};

export default NavBar;
