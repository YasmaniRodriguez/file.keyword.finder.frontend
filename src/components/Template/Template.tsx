import React, { useState, useContext } from "react";
import StyledTemplate from "./StyledTemplate";
import {
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
//import { Theme, useTheme } from "@mui/material/styles";
import { AppContext } from "../../contexts/AppContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500,
    },
  },
};

// function getStyles(name: string, template: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       template.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

interface Props {
  addKeyword: (arg0: string) => void;
}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);
  //const theme = useTheme();
  const [template, setTemplate] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof template>) => {
    const {
      target: { value },
    } = event;
    setTemplate(typeof value === "string" ? value.split(",") : value);

    const tags = appCtx?.availableTemplates?.find(
      (template) => template.name === value,
    )?.keywords;

    tags?.forEach((element) => {
      props.addKeyword(element);
    });
  };

  return (
    <StyledTemplate>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={template}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <>Select a template</>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {appCtx?.availableTemplates?.map((template, key) => (
            <MenuItem
              key={key}
              value={template.name}
              //style={getStyles(template.name, template, theme)}
            >
              {template.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledTemplate>
  );
};

export default Template;
