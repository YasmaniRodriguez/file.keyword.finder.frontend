import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Template from "../Template/Template";
import StyledKeyword from "./StyledKeyword";
import Category from "../Category/Category";

interface Props {
  keywords: string[] | undefined;
  addKeyword: (arg0: string) => void;
  deleteKeyword: (arg0: string) => void;
}

const Keyword = (props: Props) => {
  const { keywords, addKeyword, deleteKeyword } = props;
  return (
    <StyledKeyword>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Keywords
      </Typography>
      <Box className="order-content">
        <Template addKeyword={addKeyword} />
        <TextField
          id="keywords"
          // value={props.keyword}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Category keywords={keywords} deleteKeyword={deleteKeyword} />
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
