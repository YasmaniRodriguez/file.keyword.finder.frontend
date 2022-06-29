import React, { useState, useContext, useEffect } from "react";
import StyledHome from "./StyledHome";
import Copywriting from "../../components/Copywriting/Copywriting";
import UploadWrapper from "../../components/UploadWrapper/UploadWrapper";
import Warranty from "../../components/Warranty/Warranty";
import OrderWrapper from "../../components/OrderWrapper/OrderWrapper";
import { AppContext } from "../../contexts/AppContext";
import { Categories, Templates } from "../../assets/types";
import categories from "../../assets/data/categories";
import templates from "../../assets/data/templates";

const Home = () => {
  const appCtx = useContext(AppContext);

  const [availableCategories, setAvailableCategories] =
    useState<Categories[]>();
  const [availableTemplates, setAvailableTemplates] = useState<Templates[]>();

  const addCategory = (category: string) => {
    let arr: string[] = availableCategories || [];

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
    let arr: string[] = availableCategories || [];
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
    let arr: Templates[] = availableTemplates || [];
    arr.push(template);
    setAvailableTemplates([...new Set(arr)]);
  };

  const deleteTemplate = (template: Templates) => {
    let arr: Templates[] = availableTemplates || [];
    let data = arr.find((row) => row === template);
    if (data !== undefined) {
      let i = arr.indexOf(data);
      if (i !== -1) {
        arr.splice(i, 1);
        setAvailableTemplates(arr);
      }
    }
  };

  useEffect(() => {
    let data = categories.payload;
    setAvailableCategories(data);
  }, []);

  useEffect(() => {
    let data = templates.payload;
    setAvailableTemplates(data);
  }, []);

  return (
    <StyledHome>
      {appCtx?.order ? (
        <OrderWrapper
          availableCategories={availableCategories}
          availableTemplates={availableTemplates}
          addCategory={addCategory}
          deleteCategory={deleteCategory}
          addTemplate={addTemplate}
          deleteTemplate={deleteTemplate}
        />
      ) : (
        <UploadWrapper />
      )}
      <Copywriting
        header={
          appCtx?.order ? "Everything is ready to go" : "Let's do it together"
        }
        subheader={appCtx?.order ? "Absolutely amazing!" : "I'm very anxious"}
      />
      <Warranty />
    </StyledHome>
  );
};

export default Home;
