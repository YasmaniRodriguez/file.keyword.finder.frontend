import React, { createContext, useState } from "react";
import { SnackBarContextType } from "../assets/types";
import SnackBar from "../components/SnackBar/SnackBar";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material";

interface Props {
  children: JSX.Element;
}

const SnackBarContext = createContext<SnackBarContextType | null>(null);

const SnackBarContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [anchor, setAnchor] = useState<SnackbarOrigin>({
    vertical: "top",
    horizontal: "center",
  });
  const [severity, setSeverity] = useState<AlertColor>("warning");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  const changeSeverity = (newSeverity: AlertColor) => {
    setSeverity(newSeverity);
  };

  const changeAnchor = (newAnchor: SnackbarOrigin) => {
    setAnchor(newAnchor);
  };

  return (
    <SnackBarContext.Provider
      value={{
        open,
        message,
        severity,
        anchor,
        handleOpen,
        handleClose,
        changeMessage,
        changeSeverity,
        changeAnchor,
      }}
    >
      <SnackBar />
      {children}
    </SnackBarContext.Provider>
  );
};

export { SnackBarContext, SnackBarContextProvider };
