import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import { AppContext } from "../../contexts/AppContext";
import {
  StyledCategory,
  CategoryList,
  CategoryListItem,
} from "./StyledCategory";

interface Props {}

const Category = (props: Props) => {
  const appCtx = useContext(AppContext);

  return (
    <StyledCategory>
      <CategoryList>
        {appCtx?.order?.keywords.map((word, key) => (
          <CategoryListItem key={key} index={key}>
            {word}
            <IconButton
              onClick={() => {
                appCtx.deleteOrderKeyword(word);
              }}
              size="small"
            >
              <ClearIcon sx={{ fontSize: "medium" }} />
            </IconButton>
          </CategoryListItem>
        ))}
      </CategoryList>
    </StyledCategory>
  );
};

export default Category;
