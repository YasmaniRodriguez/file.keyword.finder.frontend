import styled from "@emotion/styled";
import { Dashboard } from "@uppy/react";

const StyledDragDrop = styled(Dashboard)`
  margin: auto;
  width: 50%;
  height: 50%;
  position: relative;
  & .uppy-Root {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    & .uppy-Dashboard {
      height: 100%;
      width: 100%;
      & .uppy-Dashboard-inner {
        & .uppy-Dashboard-innerWrap {
          & .uppy-Dashboard-AddFiles {
          }
        }
      }
    }
  }
`;

export default StyledDragDrop;
