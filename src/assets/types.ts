import { Dispatch, SetStateAction } from "react";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material";

interface Settings {
  authenticated: boolean;
  languaje: string;
  theme?: string;
}

interface AppContextType {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
  order: string | undefined;
  setOrder: Dispatch<SetStateAction<string | undefined>>;
}

interface DialogContextType {
  open: boolean;
  title: string;
  child: JSX.Element | JSX.Element[];
  handleOpen: () => void;
  handleClose: () => void;
  changeTitle: (arg0: string) => void;
  //changeChild: (arg0: {}[]) => void;
}

interface SnackBarContextType {
  open: boolean;
  message: string;
  anchor: SnackbarOrigin;
  severity: AlertColor;
  handleOpen: () => void;
  handleClose: () => void;
  changeMessage: (arg0: string) => void;
  changeSeverity: (arg0: AlertColor) => void;
  changeAnchor: (arg0: SnackbarOrigin) => void;
}
export type {
  Settings,
  AppContextType,
  DialogContextType,
  SnackBarContextType,
};
