import styled from "@emotion/styled";
import { theme } from "../../assets/themes";
import { Box } from "@mui/material";

const StyledRecordWidget = styled(Box)`
  flex: 350px;
  min-height: 70vh;
  flex-grow: 1;

  & .order-row {
    display: flex;
    padding: 5px;
    border: solid 1px ${theme.colors.secondary};
    & p:nth-child(1) {
      width: 20%;
      font-weight: bold;
      color: ${theme.colors.secondary};
    }
    & p:nth-child(1)::after {
      content: ":";
    }
    & p:nth-child(2) {
      width: 80%;
      margin-left: 5px;
      font-size: 1.5vw;
    }
  }
`;

export default StyledRecordWidget;
