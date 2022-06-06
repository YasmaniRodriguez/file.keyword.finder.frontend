import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material";
import { AppContext } from "../../contexts/AppContext";
import { StyledKeyword, KeywordList, KeywordListItem } from "./StyledKeyword";

interface Props {}

const Category = (props: Props) => {
  const appCtx = useContext(AppContext);

  return (
    <StyledKeyword>
      <KeywordList>
        {appCtx?.order?.keywords.map((word, key) => (
          <KeywordListItem key={key} index={key}>
            {word}
            <IconButton
              onClick={() => {
                appCtx.deleteOrderKeyword(word);
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
