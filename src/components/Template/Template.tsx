import React, { useState, useContext } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import StyledCopywriting from "./StyledTemplate";
import { theme } from "../../assets/themes";
import Form from "./Form";
import Board from "./Board";
import Category from "./Category";

interface Props {}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);
  console.log(appCtx?.availableTemplates);
  const [open, setOpen] = useState(true);
  return (
    <StyledCopywriting>
      <Box
        sx={{
          border: `solid 1px ${theme.colors.secondary}`,
          height: "10%",
          marginBottom: "5px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          height: "90%",
          padding: "5px",
          border: `solid 1px ${theme.colors.secondary}`,
        }}
      >
        <Box
          sx={{
            width: "50%",
            overflow: "hidden scroll",

            "&::-webkit-scrollbar": {
              width: "12px",
            },

            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.2)",
              "-webkit-backdrop-filter": " blur(5px)",
              backdropFilter: "blur(5px)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(214, 214, 214, 0.48)",
              "-webkit-backdrop-filter": "blur(10px)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <Category name="generic">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Category>
          <Category name="development">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Category>
          <Category name="administrative">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Category>
          {/* {appCtx?.availableCategories?.map((category, key) => (
            <Category name={category} key={key}>
              <Box sx={{ background: "red" }}></Box>
            </Category>
          ))} */}
        </Box>
        <Box sx={{ border: "solid 1px black", width: "50%" }}>
          {open ? <Form open={open} /> : <Board />}
        </Box>
      </Box>
    </StyledCopywriting>
  );
};

export default Template;
