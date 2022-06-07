import React, { useState, useContext, useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import StyledCopywriting from "./StyledTemplate";
import Form from "./Form";
import Board from "./Board";

interface Props {}

const Template = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledCopywriting>
      <Box sx={{ border: "solid 1px black", height: "10%" }}></Box>
      <Box sx={{ display: "flex", height: "90%" }}>
        <Box sx={{ border: "solid 1px black", width: "50%" }}></Box>
        <Box sx={{ border: "solid 1px black", width: "50%" }}>
          {open ? <Form open={open} /> : <Board />}
        </Box>
      </Box>
    </StyledCopywriting>
  );
};

export default Template;
