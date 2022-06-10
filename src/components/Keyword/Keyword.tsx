import React from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import { StyledKeyword, KeywordList, KeywordListItem } from "./StyledKeyword";

interface Props {
  keywords: string[] | undefined;
  deleteKeyword: ((arg0: string) => void) | undefined;
}

const Category = (props: Props) => {
  return (
    <StyledKeyword>
      <KeywordList>
        {props.keywords?.map((word, key) => (
          <KeywordListItem key={key} index={key}>
            {word}
            <IconButton
              onClick={() => {
                props.deleteKeyword
                  ? props.deleteKeyword(word)
                  : console.warn("delete handle not found");
              }}
              size="small"
            >
              <ClearIcon sx={{ fontSize: "medium" }} />
            </IconButton>
          </KeywordListItem>
        ))}
      </KeywordList>
    </StyledKeyword>
  );
};

export default Category;
