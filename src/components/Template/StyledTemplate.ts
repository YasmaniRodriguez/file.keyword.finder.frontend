import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledTemplate = styled(Box)`
  display: flex;
  height: 70vh;
  width: 70vw;

  & .MuiPaper-root {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
  }
`;

export default StyledTemplate;
