import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledDrop = styled(Box)`
  height: 90vh;
  position: relative;
  background: #e2e2e2;
  & .uppy-Container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

export default StyledDrop;
