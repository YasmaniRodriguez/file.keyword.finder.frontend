import React from "react";
import { Typography } from "@mui/material";
import StyledCopywriting from "./StyledCopywriting";

interface Props {
  header: string;
  subheader: string;
}

const Copywriting = (props: Props) => {
  return (
    <StyledCopywriting>
      <Typography variant="h5" component={"h5"}>
        {props.header}
      </Typography>
      <Typography>{props.subheader}</Typography>
    </StyledCopywriting>
  );
};

export default Copywriting;
