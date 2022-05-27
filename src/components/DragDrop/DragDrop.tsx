import React from "react";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import StyledDragDrop from "./StyledDragDrop";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

interface Props {}

const uppy = new Uppy({
  autoProceed: true,
  restrictions: {
    maxFileSize: 1000000,
    maxNumberOfFiles: 100,
    minNumberOfFiles: 1,
    allowedFileTypes: [".pdf"],
  },
});

uppy.use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });
uppy.on("complete", (result) => {
  console.log("Upload result:", result);
});

const DragDrop = (props: Props) => {
  return <StyledDragDrop uppy={uppy} />;
};

export default DragDrop;
