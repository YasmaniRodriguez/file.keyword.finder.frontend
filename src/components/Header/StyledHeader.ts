import styled from "@emotion/styled";
import { theme } from "../../assets/themes";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  border: solid 1px ${theme.colors.primary};
`;

export default StyledHeader;
