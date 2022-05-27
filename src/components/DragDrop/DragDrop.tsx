import React from "react";
import { Box, Typography } from "@mui/material";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { Dashboard } from "@uppy/react";
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
  return (
    <StyledDragDrop>
      <Dashboard uppy={uppy} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography variant="h5" component={"h5"}>
          Everything is ready to go
        </Typography>
        <Typography>Absolutely amazing!</Typography>
      </Box>
    </StyledDragDrop>
  );
};

export default DragDrop;
