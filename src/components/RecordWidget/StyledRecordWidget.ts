import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledRecordWidget = styled(Box)`
  flex: 350px;
  min-height: 70vh;
  flex-grow: 1;
  & div {
    border: solid 1px black;
  }
`;

export default StyledRecordWidget;
