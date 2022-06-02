import React from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import {
  StyledCategory,
  CategoryList,
  CategoryListItem,
} from "./StyledCategory";

interface Props {
  keywords: string[] | undefined;
  deleteKeyword: (arg0: string) => void;
}

const Category = (props: Props) => {
  const { keywords, deleteKeyword } = props;
  return (
    <StyledCategory>
      <CategoryList>
        {keywords?.map((word, index) => (
          <CategoryListItem index={index}>
            {word}
            <IconButton
              onClick={() => {
                deleteKeyword(word);
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
