import React from "react";
import { Box, Typography } from "@mui/material";
import StyledRecordWidget from "./StyledRecordWidget";
import Cloud from "../Cloud/Cloud";

interface Props {}

const RecordWidget = (props: Props) => {
  return (
    <StyledRecordWidget>
      <Typography variant="h5" component={"h5"}>
        Summary
      </Typography>
      <Box>Record</Box>
      <Box>Files</Box>

      <Cloud />

      <Box>Amount</Box>
    </StyledRecordWidget>
  );
};

export default RecordWidget;
