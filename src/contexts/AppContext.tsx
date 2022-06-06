import React, { createContext, useState, ReactNode } from "react";
import { Settings, AppContextType, Orders } from "../assets/types";
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

  const defaultTemplates = [
    {
      name: "Web Full Stack",
      category: "Development",
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

  const defaultOrder = {
    name: "9D7eHzOGSVd55iVNFeEBewkM5CA2",
    quantity: 1000,
    amount: 10000,
    keywords: [],
  };

  const [order, setOrder] = useState<Orders | undefined>(defaultOrder);

  const addOrderKeyword = (keyword: string) => {
    if (order !== undefined) {
      let arr: string[] | undefined = order.keywords;
      arr.push(keyword);
      setOrder({
        ...order,
        keywords: [
          ...new Set(
            arr.map((word) => {
              return word.toLowerCase();
            }),
          ),
        ],
      });
    }
  };

  const deleteOrderKeyword = async (keyword: string) => {
    if (order !== undefined) {
      let arr: string[] | undefined = order.keywords;
      let data = arr.find((row) => row === keyword);
      if (data !== undefined) {
        let i = arr.indexOf(data);
        if (i !== -1) {
          arr.splice(i, 1);
          setOrder({ ...order, keywords: arr });
        }
      }
    }
  };

  const [availableTemplates, setAvailableTemplates] = useState<
    Templates[] | undefined
  >(defaultTemplates);

  return (
    <AppContext.Provider
      value={{
        settings,
        setSettings,
        order,
        addOrderKeyword,
        deleteOrderKeyword,
        availableTemplates,
        setAvailableTemplates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
