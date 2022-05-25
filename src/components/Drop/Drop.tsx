import React from "react";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import StyledDrop from "./StyledDrop";

interface Props {}

const uppy = new Uppy();

const Drop = (props: Props) => {
  return (
    <StyledDrop>
      <DragDrop uppy={uppy}></DragDrop>
    </StyledDrop>
  );
};

export default Drop;
