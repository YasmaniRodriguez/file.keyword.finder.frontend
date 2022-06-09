import React from "react";
import { StyledListWidget, StyledListItemButton } from "./StyledListWidget";
import { ListItem, ListItemText } from "@mui/material";
import { Templates } from "../../assets/types";

interface Props {
  handleClick: (arg0: Templates) => void;
  list: Templates[] | undefined;
}
const ListWidget = (props: Props) => {
  return (
    <StyledListWidget>
      {props.list?.map((item, key) => (
        <ListItem key={key} divider={true}>
          <StyledListItemButton
            onClick={() => {
              props.handleClick(item);
            }}
          >
            <ListItemText primary={item.name} />
          </StyledListItemButton>
        </ListItem>
      ))}
    </StyledListWidget>
  );
};

export default ListWidget;
