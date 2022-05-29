import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes";

const StyledOrder = styled(Box)`
  margin: auto;
  border: solid 1px ${theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 80%;
  min-height: 70vh;
  margin-top: 20px;

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

export default StyledOrder;
