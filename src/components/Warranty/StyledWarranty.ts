import styled from "@emotion/styled";
import { theme } from "../../assets/themes";

const StyledWarranty = styled.section`
  min-height: 70vh;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;

  & > div {
    flex: 350px;
    display: flex;
  }
`;

export default StyledWarranty;
