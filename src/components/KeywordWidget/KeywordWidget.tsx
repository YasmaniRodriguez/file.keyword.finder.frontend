import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import StyledKeywordWidget from "./StyledKeywordWidget";

const KeywordWidget = () => {
  return (
    <StyledKeywordWidget>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ maxHeight: "10%", border: "solid 1px black" }}>
          <Typography
            sx={{ textAlign: "center" }}
            variant="h4"
            component={"h4"}
          >
            Keywords
          </Typography>
        </Box>

        <Box component="form">
          <Button variant="outlined">Enviar</Button>
        </Box>
      </Box>
    </StyledKeywordWidget>
  );
};

export default KeywordWidget;
