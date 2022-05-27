import styled from "@emotion/styled";
import { theme } from "../../assets/themes";

const StyledWarranty = styled.section`
  min-height: 80vh;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;

  & div {
    flex: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & h5 {
        margin-top: 10px;
      }
      & p {
        padding: 10px;
        text-align: center;
      }
    }
  }
`;

export default StyledWarranty;
