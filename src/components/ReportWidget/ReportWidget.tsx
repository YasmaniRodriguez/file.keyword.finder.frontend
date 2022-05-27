import React from "react";
import { Box, Typography } from "@mui/material";
import StyledReportWidget from "./StyledReportWidget";

const ReportWidget = () => {
  return (
    <StyledReportWidget>
      <Box>
        <Box>
          <Typography variant="h4" component={"h4"}>
            Preliminary report
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              margin: "10px",
              minHeight: "60vh",
              background: "#e2e2e2",
            }}
          ></Box>
        </Box>
      </Box>
    </StyledReportWidget>
  );
};

export default ReportWidget;
