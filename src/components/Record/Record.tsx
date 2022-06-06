import React, { useContext } from "react";
import { Box, Typography, Divider } from "@mui/material";
import StyledRecord from "./StyledRecord";
import Cloud from "../Cloud/Cloud";
import { AppContext } from "../../contexts/AppContext";

interface Props {}

const Record = (props: Props) => {
  const appCtx = useContext(AppContext);
  return (
    <StyledRecord>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Record
      </Typography>
      <Box className="order-content">
        <Box className="order-row">
          <Typography variant="h6" component={"p"}>
            Order_Id
          </Typography>
          <Typography variant="h6" component={"p"}>
            {appCtx?.order?.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }} className="order-row">
            <Typography variant="h6" component={"p"}>
              Files
            </Typography>
            <Typography variant="h6" component={"p"}>
              {appCtx?.order?.quantity}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="order-row">
            <Typography variant="h6" component={"p"}>
              Amount
            </Typography>
            <Typography variant="h6" component={"p"}>
              {appCtx?.order?.amount}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "rgb(210, 143, 230)" }} />
        <Cloud />
      </Box>
    </StyledRecord>
  );
};

export default Record;
