import React from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import {
  StyledCategory,
  CategoryList,
  CategoryListItem,
} from "./StyledCategory";

interface Props {
  list: string[];
}

const Category = ({ list = [] }: Props) => {
  return (
    <StyledCategory>
      <CategoryList>
        {list.map((word, index) => (
          <CategoryListItem index={index}>
            {word}
            <IconButton size="small">
              <ClearIcon sx={{ fontSize: "medium" }} />
            </IconButton>
          </CategoryListItem>
        ))}
      </CategoryList>
    </StyledCategory>
  );
};

export default Category;
