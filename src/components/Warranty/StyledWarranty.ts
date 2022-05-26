import styled from "@emotion/styled";
import { theme } from "../../assets/themes";

const StyledWarranty = styled.section`
  min-height: 70vh;
  width: 100%;
  display: flex;
  border: solid 1px green;

  & div {
    margin: auto;
    display: flex;
    height: 100%;
  }

  & span {
    height: 300px;
    width: 2px;
  }
`;

export default StyledWarranty;
