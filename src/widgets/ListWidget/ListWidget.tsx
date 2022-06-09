import React from "react";
import { StyledListWidget, StyledListItemButton } from "./StyledListWidget";
import { ListItem, ListItemText } from "@mui/material";

interface Props {
  // handleClick: (arg0: {
  //   name: string;
  //   type: string;
  //   source?: string | { name: string; operator: string; value: number }[];
  // }) => void;
  list:
    | {
        name: string;
        source?: string | { name: string; operator: string; value: number }[];
      }[]
    | undefined;
  //type: string;
}
const ListWidget = (props: Props) => {
  return (
    <StyledListWidget>
      {props.list?.map((item, key) => (
        <ListItem key={key} divider={true}>
          <StyledListItemButton
          // onClick={() => {
          //   props.handleClick({ ...item, type: props.type });
          // }}
          >
            <ListItemText primary={item.name} />
          </StyledListItemButton>
        </ListItem>
      ))}
    </StyledListWidget>
  );
};

export default ListWidget;
