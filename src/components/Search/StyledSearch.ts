import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes";

const StyledSearch = styled(Box)`
  flex: 350px;
  min-height: 100%;
  flex-grow: 1;
  padding: 10px;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${theme.colors.secondary};
    }
  }
`;

export default StyledSearch;
