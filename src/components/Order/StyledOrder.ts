import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes";

const StyledOrder = styled(Box)`
  width: 80%;
  min-height: 80%;
  display: flex;
  flex-wrap: wrap;
  border: solid 1px ${theme.colors.primary};
  border-radius: 5px;
  & div {
    flex: 350px;
    height: 70vh;
  }
`;

export default StyledOrder;
