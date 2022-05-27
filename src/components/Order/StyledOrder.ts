import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes";

const StyledOrder = styled(Box)`
  margin: auto;
  border: solid 1px #e2e2e2;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 80%;
  min-height: 75vh;
  margin-top: 20px;

  & div {
    flex: 350px;
    min-height: 75vh;
    flex-grow: 1;
    & h5 {
      text-align: center;
      font-weight: bold;
      color: ${theme.colors.primary};
      padding: 10px;
    }
  }
`;

export default StyledOrder;
