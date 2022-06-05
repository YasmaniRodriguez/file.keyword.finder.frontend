import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Template from "../Template/Template";
import StyledKeyword from "./StyledKeyword";
import Category from "../Category/Category";

interface Props {
  orderKeywords: string[] | undefined;
  addOrderKeyword: (arg0: string) => void;
  deleteOrderKeyword: (arg0: string) => void;
}

const Keyword = (props: Props) => {
  const { orderKeywords, addOrderKeyword, deleteOrderKeyword } = props;
  const [keyword, setKeyword] = useState<string | undefined>();

  const changeKeyword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let value = (event.currentTarget as HTMLInputElement).value;
    setKeyword(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && keyword !== undefined) {
      return keyword.length > 0
        ? (addOrderKeyword(keyword), setKeyword(""))
        : false;
    }
  };

  return (
    <StyledKeyword>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Keywords
      </Typography>
      <Box className="order-content">
        <Template addOrderKeyword={addOrderKeyword} />
        <TextField
          id="keywords"
          value={keyword}
          onChange={(e) => changeKeyword(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Category
          orderKeywords={orderKeywords}
          deleteOrderKeyword={deleteOrderKeyword}
        />
        <Button
          sx={{ marginLeft: "50%", transform: "translateX(-50%)" }}
          variant="outlined"
        >
          send to process
        </Button>
      </Box>
    </StyledKeyword>
  );
};

export default Keyword;
