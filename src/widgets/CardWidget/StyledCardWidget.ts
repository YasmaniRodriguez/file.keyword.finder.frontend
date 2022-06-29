import styled from "@emotion/styled";
import { Card } from "@mui/material";

interface Props {
  styles?: { [key: string]: any };
}
const StyledCardWidget = styled(Card)<Props>`
  ${(props: Props) => props.styles}

  & .MuiCardMedia-root > .MuiButtonBase-root {
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 99;
  }
`;

export default StyledCardWidget;
