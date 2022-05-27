import React, { useContext } from "react";
import StyledNavBar from "./StyledHeader";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";
import { ArrowRight } from "@mui/icons-material";
import { AppContext } from "../../contexts/AppContext";

interface Props {}

const NavBar = (props: Props) => {
  const appCtx = useContext(AppContext);
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
          Flyers Reader
        </Typography>
        <Box
          sx={{
            display: appCtx?.order ? "flex" : "none",
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
          <Typography>{appCtx?.order}</Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 2, height: "100%" }}></Box>
    </StyledNavBar>
  );
};

export default NavBar;
