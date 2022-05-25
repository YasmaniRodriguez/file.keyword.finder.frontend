import React, { createContext, useState } from "react";
import { DialogContextType } from "../assets/types";
import Dialog from "../components/Dialog/Dialog";
import ItemViewer from "../components/ItemViewer/ItemViewer";

interface Props {
  children: JSX.Element;
}

const DialogContext = createContext<DialogContextType | null>(null);

const DialogContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const defaultChild = (
    <ItemViewer styles={{}}>
      <></>
    </ItemViewer>
  );

  const [title, setTitle] = useState("");

  const [child, setChild] = useState(defaultChild);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  // const changeChild = (newChild?: {}[]) => {
  //   return newChild?.length === 0
  //     ? false
  //     : setChild(
  //         <ItemViewer styles={cardUseCaseBoxStyles}>
  //           <SearchWidget fullWidth={false} styles={{}} />
  //           <Box component={"article"}>
  //             {newChild?.map((useCase, i) => (
  //               <UseCaseWidget key={i} {...useCase} />
  //             ))}
  //           </Box>
  //         </ItemViewer>,
  //       );
  // };

  return (
    <DialogContext.Provider
      value={{
        open,
        title,
        child,
        handleOpen,
        handleClose,
        changeTitle,
        // changeChild,
      }}
    >
      <Dialog />
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogContextProvider };
