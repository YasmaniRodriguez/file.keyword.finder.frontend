import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import StyledKeywordWidget from "./StyledKeywordWidget";

const KeywordWidget = () => {
  return (
    <StyledKeywordWidget>
      <Box>
        <Typography variant="h5" component={"h5"}>
          Keywords
        </Typography>
      </Box>
      {/* <Box>

        <Box>
          <Box
            sx={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="step-formula"
              // value={props.node?.formula}
              placeholder="write keywords to find"
              fullWidth
              sx={{ maxHeight: "10%" }}
            />
            <Box
              sx={{
                border: "solid 1px #e2e2e2",
                borderRadius: "5px",
                maxHeight: "50%",
                width: "100%",
                margin: "20px",
              }}
            ></Box>
            <Button variant="outlined">Enviar</Button>
          </Box>
        </Box>
      </Box> */}
    </StyledKeywordWidget>
  );
};

export default KeywordWidget;
