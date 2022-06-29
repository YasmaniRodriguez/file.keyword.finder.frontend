import React, { createContext, useState, ReactNode } from "react";
import { Settings, AppContextType, Orders } from "../assets/types";
import { Templates } from "../assets/types";

interface Props {
  children: JSX.Element | ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: Props) => {
  const defaultSettings = {
    authenticated: false,
    languaje: "es",
    theme: "light",
  };

  const defaultOrder = {
    name: "9D7eHzOGSVd55iVNFeEBewkM5CA2",
    quantity: 1000,
    amount: 10000,
    keywords: [],
  };

  const [settings, setSettings] = useState<Settings>(defaultSettings);

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

  const deleteOrderKeyword = (keyword: string) => {
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

  return (
    <AppContext.Provider
      value={{
        settings,
        order,
        addOrderKeyword,
        deleteOrderKeyword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
