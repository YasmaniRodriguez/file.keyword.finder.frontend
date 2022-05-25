import React, { useContext } from "react";
import StyledDialog from "./StyledDialog";
import { DialogTitle, DialogContent } from "@mui/material";
import { DialogContext } from "../../contexts/DialogContext";

const Dialog = () => {
  const dialogCtx = useContext(DialogContext);
  return (
    <StyledDialog
      open={dialogCtx?.open || false}
      onClose={dialogCtx?.handleClose}
      maxWidth={"md"}
    >
      <DialogTitle>{dialogCtx?.title}</DialogTitle>
      <DialogContent>{dialogCtx?.child}</DialogContent>
    </StyledDialog>
  );
};

export default Dialog;
