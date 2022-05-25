import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledDrop = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export default StyledDrop;
