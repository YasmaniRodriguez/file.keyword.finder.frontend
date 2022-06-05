import React, { createContext, useState, useEffect } from "react";
import { DialogContextType } from "../assets/types";
import Dialog from "../widgets/Dialog/Dialog";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DialogContext = createContext<DialogContextType | null>(null);

const DialogContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string | undefined>();
  const [content, setContent] = useState<JSX.Element | undefined>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle(undefined);
    setContent(undefined);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleView = (newTitle: string, newContent: JSX.Element) => {
    setTitle(newTitle);
    setContent(newContent);
  };

  useEffect(() => {}, [open]);

  return (
    <DialogContext.Provider
      value={{
        open,
        title,
        content,
        handleOpen,
        handleClose,
        handleConfirm,
        labelPrimaryButton: "Ok",
        labelSecondaryButton: "Cancel",
        handleView,
      }}
    >
      <Dialog />
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogContextProvider };
