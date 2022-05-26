import React from "react";
import StyledNavBar from "./StyledHeader";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";
import { ArrowRight } from "@mui/icons-material";

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
            color: "whitesmoke",
            fontWeight: "bold",
          },
        }}
      >
        <Typography component={"h1"} variant="h1">
          File.Keyword.Finder
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& p": {
              fontSize: `${theme.fontSizes.m}`,
              color: "whitesmoke",
              fontWeight: "bold",
            },
          }}
        >
          <ArrowRight
            sx={{ color: "whitesmoke", height: "50px", width: "50px" }}
          />
          <Typography>9D7eHzOGSVd55iVNFeEBewkM5CA2</Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 2, height: "100%" }}></Box>
    </StyledNavBar>
  );
};

export default NavBar;
