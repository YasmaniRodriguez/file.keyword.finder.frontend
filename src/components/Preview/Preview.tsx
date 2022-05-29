import React from "react";
import { Box, Typography } from "@mui/material";
import StyledPreview from "./StyledPreview";
import WordCloud from "../WordCloud/WordCloud";

const Preview = () => {
  return (
    <StyledPreview>
      <Typography variant="h5" component={"h5"}>
        Preview
      </Typography>
      <Box>
        <WordCloud />
      </Box>
    </StyledPreview>
  );
};

export default Preview;
