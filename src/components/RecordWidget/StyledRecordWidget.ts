import styled from "@emotion/styled";
import { theme } from "../../assets/themes";
import { Box } from "@mui/material";

const StyledRecordWidget = styled(Box)`
  flex: 350px;
  min-height: 100%;
  flex-grow: 1;
  padding: 10px;
  & .order-row {
    display: flex;
    padding: 5px;
    & p {
      font-size: 1.5vw;
    }
    & p:nth-child(1) {
      font-weight: bold;
      color: ${theme.colors.secondary};
      ::after {
        content: ":";
      }
    }
    & p:nth-child(2) {
      width: 100%;
      margin-left: 5px;
    }
  }
`;

export default StyledRecordWidget;
