import React from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import StyledDrop from "./StyledDrop";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

interface Props {}

const uppy = new Uppy();

uppy.use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });
uppy.on("complete", (result) => {
  console.log("Upload result:", result);
});

const Drop = (props: Props) => {
  return (
    <StyledDrop>
      <Dashboard uppy={uppy}></Dashboard>
    </StyledDrop>
  );
};

export default Drop;
