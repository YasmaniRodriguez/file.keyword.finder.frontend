import React, { useState } from "react";
import StyledTemplateListWidget from "./StyledTemplateListWidget";
import {
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";

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

const templates = [
  "Web Full Stack",
  "Business Analyst",
  "UX Designer",
  "QA Automation",
  "Product Owner",
  "Scrum Master",
  "DevOps",
];

function getStyles(name: string, template: readonly string[], theme: Theme) {
  return {
    fontWeight:
      template.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MenuListWidget = () => {
  const theme = useTheme();
  const [template, setTemplate] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof template>) => {
    const {
      target: { value },
    } = event;
    setTemplate(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <StyledTemplateListWidget>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={template}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select a template</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Select a tamplate</em>
          </MenuItem>
          {templates.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, template, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledTemplateListWidget>
  );
};

export default MenuListWidget;
