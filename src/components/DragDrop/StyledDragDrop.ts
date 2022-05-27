import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledDragDrop = styled(Box)`
  max-height: 70%;
  max-width: 80%;
  margin: 5vh auto;
  & .uppy-Container {
    & .uppy-Root {
      & .uppy-Dashboard {
        & .uppy-Dashboard-inner {
          & .uppy-Dashboard-innerWrap {
            & .uppy-Dashboard-AddFiles {
            }
          }
        }
      }
    }
  }
`;

export default StyledDragDrop;
