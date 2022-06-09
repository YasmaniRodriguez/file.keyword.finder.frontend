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
    {
      name: "Comprador",
      keywords: [
        "compras",
        "abastecimiento",
        "proveedores",
        "depositos",
        "fletes",
        "acuerdo de precios",
        "materias primas",
      ],
    },
    {
      name: "Vendedor",
      keywords: [
        "compras",
        "abastecimiento",
        "proveedores",
        "depositos",
        "fletes",
        "acuerdo de precios",
        "materias primas",
      ],
    },
  ];

  const defaultOrder = {
    name: "9D7eHzOGSVd55iVNFeEBewkM5CA2",
    quantity: 1000,
    amount: 10000,
    keywords: [],
  };

  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const [order, setOrder] = useState<Orders | undefined>(defaultOrder);
  const [availableCategories, setAvailableCategories] = useState<string[]>([
    "Generic",
    "Development",
  ]);
  const [availableTemplates, setAvailableTemplates] =
    useState<Templates[]>(defaultTemplates);

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

  const addCategory = (category: string) => {
    let arr: string[] = availableCategories;
    arr.push(category);
    setAvailableCategories([
      ...new Set(
        arr.map((word) => {
          return word.toLowerCase();
        }),
      ),
    ]);
  };

  const deleteCategory = (category: string) => {
    let arr: string[] = availableCategories;
    let data = arr.find((row) => row === category);
    if (data !== undefined) {
      let i = arr.indexOf(data);
      if (i !== -1) {
        arr.splice(i, 1);
        setAvailableCategories(arr);
      }
    }
  };

  const addTemplate = (template: Templates) => {
    let arr: Templates[] | undefined = availableTemplates;
    arr.push(template);
    setAvailableTemplates([...new Set(arr)]);
  };

  const deleteTemplate = (template: Templates) => {
    let arr: Templates[] | undefined = availableTemplates;
    let data = arr.find((row) => row === template);
    if (data !== undefined) {
      let i = arr.indexOf(data);
      if (i !== -1) {
        arr.splice(i, 1);
        setAvailableTemplates(arr);
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
        availableCategories,
        addCategory,
        deleteCategory,
        availableTemplates,
        addTemplate,
        deleteTemplate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
