import React from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import {
  StyledCategory,
  CategoryList,
  CategoryListItem,
} from "./StyledCategory";

interface Props {
  orderKeywords: string[] | undefined;
  deleteOrderKeyword: (arg0: string) => void;
}

const Category = (props: Props) => {
  const { orderKeywords, deleteOrderKeyword } = props;
  return (
    <StyledCategory>
      <CategoryList>
        {orderKeywords?.map((word, index) => (
          <CategoryListItem index={index}>
            {word}
            <IconButton
              onClick={() => {
                deleteOrderKeyword(word);
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
