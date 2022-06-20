import styled from "@emotion/styled";
import { theme } from "../../assets/themes";
import { Box } from "@mui/material";

const StyledRecord = styled(Box)`
  flex: 350px;
  min-height: 100%;
  flex-grow: 1;
  padding: 10px;
  & .order-row {
    display: flex;
    padding: 5px;
    & p {
      font-size: calc(0.9vw + 0.9vh + 0.5vmin);
      text-overflow: ellipsis;
    }
    & p:nth-of-type(1) {
      font-weight: bold;
      color: ${theme.colors.secondary};
      ::after {
        content: ":";
      }
    }
    & p:nth-of-type(2) {
      width: 50%;
      margin-left: 5px;
    }
  }
`;

export default StyledRecord;
