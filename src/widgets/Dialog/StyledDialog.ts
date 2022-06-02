import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }
  & .MuiDialogTitle-root {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
`;

export default StyledDialog;
