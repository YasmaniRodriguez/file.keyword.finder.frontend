import styled from "@emotion/styled";
import { Dashboard } from "@uppy/react";

const StyledDrop = styled(Dashboard)`
  margin: auto;
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
