import styled from "@emotion/styled";
import { Paper, Box } from "@mui/material";

const StyledOrder = styled(Box)`
  width: 80%;
  min-height: 80%;
  display: flex;
  flex-wrap: wrap;
  & div {
    flex: 350px;
    height: 70vh;
    width: auto;
  }
`;

export default StyledOrder;
