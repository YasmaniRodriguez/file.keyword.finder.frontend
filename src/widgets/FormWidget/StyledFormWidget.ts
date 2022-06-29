import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface Props {
  customStyles: { [key: string]: any } | undefined;
}

const StyledFormWidget = styled(Box)<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: whitesmoke;
  border-radius: 5px;
  ${(props) => props.customStyles}
`;

export default StyledFormWidget;
