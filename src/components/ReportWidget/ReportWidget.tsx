import React from "react";
import { Box, Typography } from "@mui/material";
import StyledReportWidget from "./StyledReportWidget";

const ReportWidget = () => {
  return (
    <StyledReportWidget>
      <Box
        sx={{
          flexGrow: 1,
          display: "block",
        }}
      >
        <Box sx={{ height: "10%", border: "solid 1px black" }}>
          <Typography
            sx={{ textAlign: "center" }}
            variant="h4"
            component={"h4"}
          >
            Informe preliminar
          </Typography>
        </Box>

        <Box></Box>
      </Box>
    </StyledReportWidget>
  );
};

export default ReportWidget;
