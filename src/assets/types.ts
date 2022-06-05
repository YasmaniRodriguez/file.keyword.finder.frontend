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
  availableTemplates: Templates[] | undefined;
  setAvailableTemplates: Dispatch<SetStateAction<Templates[] | undefined>>;
}

interface DialogContextType {
  open: boolean;
  title: string | undefined;
  content: JSX.Element | undefined;
  handleOpen: () => void;
  handleClose: () => void;
  handleConfirm: () => void;
  handleView: (arg0: string, arg1: JSX.Element) => void;
  labelPrimaryButton: string;
  labelSecondaryButton: string;
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

interface Templates {
  name: string;
  keywords: string[];
}

interface Orders {
  name: string;
  quantity: number;
  amount: number;
  keywords: Set<string>;
}

export type {
  Settings,
  AppContextType,
  DialogContextType,
  SnackBarContextType,
  Templates,
  Orders,
};
