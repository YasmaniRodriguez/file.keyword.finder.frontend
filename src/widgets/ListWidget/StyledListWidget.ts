import styled from "@emotion/styled";
import { List, ListItemButton } from "@mui/material";

interface Props {}

const StyledListWidget = styled(List)<Props>`
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(10px);

  & .MuiListItem-root {
    padding: 0;
  }

  & .MuiList-root {
    padding: 0;
  }

  & .MuiListItem-root > .MuiListItemButton-root {
    width: 100%;
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  & div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export { StyledListWidget, StyledListItemButton };
