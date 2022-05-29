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
        Record
      </Typography>
      <Box className="order-row">
        <Typography variant="h6" component={"p"}>
          Id
        </Typography>
        <Typography variant="h6" component={"p"}>
          {props.record}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }} className="order-row">
          <Typography variant="h6" component={"p"}>
            Files
          </Typography>
          <Typography variant="h6" component={"p"}>
            {props.files}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} className="order-row">
          <Typography variant="h6" component={"p"}>
            Amount
          </Typography>
          <Typography variant="h6" component={"p"}>
            {props.amount}
          </Typography>
        </Box>
      </Box>
      <Box className="order-row">
        <Typography variant="h5" component={"p"}>
          Preview
        </Typography>
      </Box>
      <Cloud />
    </StyledRecordWidget>
  );
};

export default RecordWidget;
