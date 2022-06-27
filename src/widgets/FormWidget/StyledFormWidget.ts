import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface Props {}

const StyledFormWidget = styled(Box)<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: whitesmoke;
`;

export default StyledFormWidget;
