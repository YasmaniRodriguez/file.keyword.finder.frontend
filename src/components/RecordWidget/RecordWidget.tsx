import React from "react";
import { Box, Typography } from "@mui/material";
import StyledRecordWidget from "./StyledRecordWidget";
import Cloud from "../Cloud/Cloud";

interface Props {
  record: string;
  files: number;
  amount: number;
}

const RecordWidget = (props: Props) => {
  return (
    <StyledRecordWidget>
      <Typography variant="h5" component={"h5"}>
        Summary
      </Typography>
      <Box className="order-row">
        <Typography variant="h5" component={"p"}>
          Record
        </Typography>
        <Typography variant="h5" component={"p"}>
          {props.record}
        </Typography>
      </Box>
      <Box className="order-row">
        <Typography variant="h5" component={"p"}>
          Files
        </Typography>
        <Typography variant="h5" component={"p"}>
          {props.files}
        </Typography>
      </Box>

      <Cloud />

      <Box className="order-row">
        <Typography variant="h5" component={"p"}>
          Amount
        </Typography>
        <Typography variant="h5" component={"p"}>
          {props.amount}
        </Typography>
      </Box>
    </StyledRecordWidget>
  );
};

export default RecordWidget;
