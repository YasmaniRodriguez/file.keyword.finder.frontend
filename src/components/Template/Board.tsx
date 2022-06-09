import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Keyword from "../Keyword/Keyword";

interface Props {
  keywords: string[] | undefined;
}

const Board = (props: Props) => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <Keyword />
    </Box>
  );
};

export default Board;
