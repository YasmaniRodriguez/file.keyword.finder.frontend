import styled from "@emotion/styled";
import { Dashboard } from "@uppy/react";

const StyledDragDrop = styled(Dashboard)`
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
