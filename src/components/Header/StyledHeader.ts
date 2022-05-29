import styled from "@emotion/styled";
import { theme } from "../../assets/themes";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 10%), 0 1px 1px 0 rgb(0 0 0 / 11%);
  border: 0;
  border-bottom: 3px solid #ffffff;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #ffffff;
`;

export default StyledHeader;
