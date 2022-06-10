import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Keyword from "../Keyword/Keyword";

interface Props {
  keywords: string[] | undefined;
  deleteKeyword: () => void;
}

const Board = (props: Props) => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <Keyword keywords={props.keywords} deleteKeyword={props.deleteKeyword} />
    </Box>
  );
};

export default Board;
