import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes";

const StyledOrderWrapper = styled(Box)`
  min-height: 80vh;
  display: flex;

  & .order-title {
    font-weight: bold;
    color: ${theme.colors.primary};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  & .order-content {
    border: solid 1px ${theme.colors.primary};
    height: 60vh;
    padding: 10px;
    border-radius: 5px;
  }
`;

export default StyledOrderWrapper;
