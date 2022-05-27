import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledOrder = styled(Box)`
  background: #fff;
  width: 80%;
  min-height: 80%;
  display: flex;
  flex-wrap: wrap;
  & div {
    flex: 350px;
    height: 70vh;
  }
`;

export default StyledOrder;
