import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import TemplateListWidget from "../TemplateListWidget/TemplateListWidget";
import StyledKeywordWidget from "./StyledKeywordWidget";

const KeywordWidget = () => {
  return (
    <StyledKeywordWidget>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Keywords
      </Typography>
      <Box className="order-content">
        <TemplateListWidget />
        <TextField
          id="keywords"
          // value={props.keyword}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Box
          sx={{
            border: "solid 1px #e2e2e2",
            borderRadius: "5px",
            height: "30vh",
            margin: "10px 0",
          }}
        ></Box>
        <Button
          sx={{ marginLeft: "50%", transform: "translateX(-50%)" }}
          variant="outlined"
        >
          send to process
        </Button>
      </Box>
    </StyledKeywordWidget>
  );
};

export default KeywordWidget;
