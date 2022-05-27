import React from "react";
import { Box, Typography } from "@mui/material";
import StyledReportWidget from "./StyledReportWidget";

const ReportWidget = () => {
  return (
    <StyledReportWidget>
      <Box>
        <Typography variant="h5" component={"h5"}>
          Preliminary report
        </Typography>
      </Box>
    </StyledReportWidget>
  );
};

export default ReportWidget;
