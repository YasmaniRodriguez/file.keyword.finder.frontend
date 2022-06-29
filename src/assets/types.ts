import { SnackbarOrigin } from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material";

type Categories = string;

interface Settings {
  authenticated: boolean;
  languaje: string;
  theme?: string;
}

interface AppContextType {
  settings: Settings;
  order: Orders | undefined;
  addOrderKeyword: (arg0: string) => void;
  deleteOrderKeyword: (arg0: string) => void;
}

interface DialogContextType {
  open: boolean;
  title: string | undefined;
  content: JSX.Element | undefined;
  handleOpen: () => void;
  handleClose: () => void;
  handleConfirm: () => void;
  handleView: (
    arg0: string,
    arg1: JSX.Element,
    arg2: string,
    arg3?: string,
  ) => void;
  labelPrimaryButton: string | undefined;
  labelSecondaryButton: string | undefined;
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
  category?: string;
  keywords?: string[];
}

interface Orders {
  name: string;
  quantity: number;
  amount: number;
  keywords: string[];
}

export type {
  Settings,
  AppContextType,
  DialogContextType,
  SnackBarContextType,
  Categories,
  Templates,
  Orders,
};
