import React from "react";
import Box from "@mui/material/Box";
import { Fade } from "@mui/material";

interface Props {
  open: boolean;
}

const Form = (props: Props) => {
  return (
    <Fade in={props.open}>
      <Box sx={{ width: "100%", height: "100%", background: "blue" }}></Box>
    </Fade>
  );
};

export default Form;
