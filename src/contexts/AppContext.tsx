import React, { createContext, useState, ReactNode } from "react";
import { Settings, AppContextType } from "../assets/types";
import { Templates } from "../assets/types";

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

  const defaultTemplates = [
    {
      name: "Web Full Stack",
      keywords: [
        "nodejs",
        "reactjs",
        "mongodb",
        "express",
        "nestjs",
        "nextjs",
        "mysql",
        "typescript",
        "git",
        "java",
        "pyton",
        "c++",
      ],
    },
  ];

  const [order, setOrder] = useState<string | undefined>(defaultOrder);
  const [availableTemplates, setAvailableTemplates] = useState<
    Templates[] | undefined
  >(defaultTemplates);

  return (
    <AppContext.Provider
      value={{
        settings,
        setSettings,
        order,
        setOrder,
        availableTemplates,
        setAvailableTemplates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
