import React, { useContext } from "react";
import StyledSnackBar from "./StyledSnackBar";
import { Alert } from "@mui/material";
import { SnackBarContext } from "../../contexts/SnackBarContext";

const SnackBar = () => {
  const ctx = useContext(SnackBarContext);
  return (
    <StyledSnackBar
      open={ctx?.open}
      message={ctx?.message}
      onClose={ctx?.handleClose}
      autoHideDuration={5000}
      anchorOrigin={ctx?.anchor}
    >
      <Alert onClose={ctx?.handleClose} severity={ctx?.severity}>
        {ctx?.message}
      </Alert>
    </StyledSnackBar>
  );
};

export default SnackBar;
