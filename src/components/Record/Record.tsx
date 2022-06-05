import React from "react";
import { Box, Typography } from "@mui/material";
import StyledRecord from "./StyledRecord";
import Cloud from "../Cloud/Cloud";

interface Props {
  record?: string;
  files: number;
  amount: number;
}

const Record = (props: Props) => {
  return (
    <StyledRecord>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Record
      </Typography>
      <Box className="order-content">
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
        <Cloud />
      </Box>
    </StyledRecord>
  );
};

export default Record;
