import React, { createContext, useState, ReactNode } from "react";
import { Settings, AppContextType } from "../assets/types";

interface Props {
  children: JSX.Element | ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: Props) => {
  const [settings, setSettings] = useState<Settings>({
    authenticated: false,
    languaje: "es",
    theme: "light",
  });

  const defaultOrder = "9D7eHzOGSVd55iVNFeEBewkM5CA2";

  const [order, setOrder] = useState<string | undefined>();

  return (
    <AppContext.Provider
      value={{
        settings,
        setSettings,
        order,
        setOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
