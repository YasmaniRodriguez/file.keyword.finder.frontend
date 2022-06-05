import React from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import {
  StyledCategory,
  CategoryList,
  CategoryListItem,
} from "./StyledCategory";

interface Props {
  orderKeywords: Set<string> | undefined;
  deleteOrderKeyword: (arg0: string) => void;
}

const Category = (props: Props) => {
  const { orderKeywords, deleteOrderKeyword } = props;

  const keywords = orderKeywords ? [...orderKeywords] : [];

  return (
    <StyledCategory>
      <CategoryList>
        {keywords?.map((word, key) => (
          <CategoryListItem key={key} index={key}>
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
