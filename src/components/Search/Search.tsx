import React, {
  useContext,
  useState,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";
//import SelectWidget from "../../widgets/SelectWidget/SelectWidget";
import { AppContext } from "../../contexts/AppContext";
import StyledSearch from "./StyledSearch";
import Keyword from "../Keyword/Keyword";

interface Props {
  keyword?: string;
  changeKeyword: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Search = (props: Props) => {
  const appCtx = useContext(AppContext);
  const { keyword, changeKeyword, handleKeyDown, handleClick } = props;

  const [template, setTemplate] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTemplate(event.target.value);

    const tags = appCtx?.availableTemplates?.find(
      (template) => template.name === event.target.value,
    )?.keywords;

    tags?.forEach((element) => {
      appCtx?.addOrderKeyword(element);
    });
  };

  return (
    <StyledSearch>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Search
      </Typography>
      <Box
        className="order-content"
        sx={{
          "& button:hover": {
            bgcolor: "rgb(210, 143, 230)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            "& div": { width: "100%", margin: 0 },
            "& button": {
              width: "10%",
              padding: "15px",
              borderRadius: "5px",
              marginLeft: "5px",
              background: "rgb(210, 143, 230)",
              color: "whitesmoke",
            },
            "& button:hover": {
              bgcolor: "rgb(210, 143, 230)",
            },
          }}
        >
          <TextField
            fullWidth
            label="Template"
            select
            value={template}
            onChange={handleChange}
          >
            {appCtx?.availableTemplates?.map((template, key) => (
              <MenuItem key={key} value={template.name}>
                {template.name}
              </MenuItem>
            ))}
          </TextField>

          <Button
            disableElevation={true}
            aria-label="template-settings"
            onClick={(e) => handleClick(e)}
          >
            <SettingsIcon />
          </Button>
        </Box>

        <TextField
          id="keywords"
          value={keyword}
          onChange={(e) => changeKeyword(e)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Keyword
          keywords={appCtx?.order?.keywords}
          deleteKeyword={appCtx?.deleteOrderKeyword}
        />
        <Button
          aria-label="order-submit"
          size="large"
          sx={{
            background: "rgb(210, 143, 230)",
            color: "white",
            marginLeft: "50%",
            fontWeight: "bold",
            transform: "translateX(-50%)",
          }}
        >
          send to process
        </Button>
      </Box>
    </StyledSearch>
  );
};

export default Search;
