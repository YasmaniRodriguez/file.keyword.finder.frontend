import React from "react";
import { Box, Typography } from "@mui/material";
import StyledRecordWidget from "./StyledRecordWidget";
import WordCloud from "../WordCloud/WordCloud";

const RecordWidget = () => {
  return (
    <StyledRecordWidget>
      <Typography variant="h5" component={"h5"}>
        Preview
      </Typography>
      <Box>
        <WordCloud />
      </Box>
    </StyledRecordWidget>
  );
};

export default RecordWidget;
