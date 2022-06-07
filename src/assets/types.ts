import { SnackbarOrigin } from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material";

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
  availableCategories: string[];
  addCategory: (arg0: string) => void;
  deleteCategory: (arg0: string) => void;
  availableTemplates: Templates[] | undefined;
  addTemplate: (arg0: Templates) => void;
  deleteTemplate: (arg0: Templates) => void;
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
  Templates,
  Orders,
};
