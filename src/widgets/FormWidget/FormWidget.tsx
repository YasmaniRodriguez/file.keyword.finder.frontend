import React, { useState } from "react";
import StyledFormWidget from "./StyledFormWidget";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  caster: {} | undefined;
  spell: "Edit" | "Add";
  render: (
    arg0: {} | undefined,
    arg1: { [key: string]: any } | undefined,
    arg2: (arg0: { [key: string]: any }) => void,
  ) => JSX.Element;
  handleCancel: () => void;
  handleConfirm: () => void;
}

const FormWidget = (props: Props) => {
  const { caster, spell, render, handleConfirm, handleCancel } = props;

  const [record, setRecord] = useState<{ [key: string]: any } | {}>();

  const changeRecord = (newRecord: { [key: string]: any }) => {
    setRecord(newRecord);
  };

  return (
    <StyledFormWidget component="form">
      <Box
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {/* <Typography variant="h6">
          {`${spell === "Add" ? "Add New" : "Edit"} ${
            Object.values(caster ? caster : {})[0].paramType
              ? "Evaluation"
              : "Modifier"
          }`}
        </Typography> */}
      </Box>
      <Box sx={{ height: "80%", background: "gray" }}>
        {render(caster, record, changeRecord)}
      </Box>

      <Box
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          "& > button": {
            margin: "10px",
          },
        }}
      >
        <Button
          variant="text"
          size="small"
          color="secondary"
          onClick={() => handleCancel()}
        >
          Cancel
        </Button>
        <Button
          variant="text"
          size="small"
          color="primary"
          onClick={() => console.log(record)}
          // onClick={() => handleConfirm()}
        >
          Done
        </Button>
      </Box>
    </StyledFormWidget>
  );
};

export default FormWidget;
