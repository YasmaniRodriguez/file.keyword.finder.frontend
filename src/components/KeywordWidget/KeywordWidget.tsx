import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  FormControl,
  IconButton,
  Divider,
  OutlinedInput,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import StyledKeywordWidget from "./StyledKeywordWidget";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const KeywordWidget = () => {
  const [personName, setPersonName] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPersonName(event.target.value as string);
  };

  return (
    <StyledKeywordWidget>
      <Typography variant="h5" component={"h5"}>
        Keywords
      </Typography>
      <Box>
        <Box>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              id="demo-multiple-name"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Placeholder</em>;
                }

                return selected;
              }}
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton
            color="primary"
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: 1,
            }}
          >
            <img
              style={{ width: "100%", height: "100%", opacity: "0.5" }}
              src="/images/setting.png"
              alt=""
            />
          </IconButton>
        </Box>
        <Divider />
        <TextField
          id="keywords"
          // value={props.node?.formula}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Box
          sx={{
            border: "solid 1px #e2e2e2",
            borderRadius: "5px",
            height: "40vh",
            margin: "10px 0",
          }}
        ></Box>
        <Button
          sx={{ marginLeft: "50%", transform: "translateX(-50%)" }}
          variant="outlined"
        >
          Enviar
        </Button>
      </Box>
    </StyledKeywordWidget>
  );
};

export default KeywordWidget;
