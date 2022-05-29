import React from "react";
import { Box, Typography } from "@mui/material";
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
          <CategoryListItem index={index}>{word}</CategoryListItem>
        ))}
      </CategoryList>
    </StyledCategory>
  );
};

export default Category;
