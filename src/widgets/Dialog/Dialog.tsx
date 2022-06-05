import React, { useContext } from "react";
import StyledDialog from "./StyledDialog";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { DialogContext } from "../../contexts/DialogContext";

interface Props {}

const Dialog = (props: Props) => {
  const dlgCtx = useContext(DialogContext);

  return (
    <StyledDialog
      open={dlgCtx?.open || false}
      onClose={(event, reason) => {
        return reason !== "backdropClick" && "escapeKeyDown";
      }}
      maxWidth={"lg"}
    >
      <DialogTitle>{dlgCtx?.title}</DialogTitle>
      <DialogContent>{dlgCtx?.content}</DialogContent>
      <DialogActions>
        <Button onClick={dlgCtx?.handleClose} variant="outlined">
          {dlgCtx?.labelSecondaryButton}
        </Button>
        <Button
          onClick={dlgCtx?.handleConfirm}
          variant="contained"
          color="success"
          autoFocus
        >
          {dlgCtx?.labelPrimaryButton}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default Dialog;
