import React, { useState } from "react";
import StyledFormWidget from "./StyledFormWidget";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  caster: { [key: string]: any } | undefined;
  spell: "Edit" | "Add";
  render: (
    caster: {} | undefined,
    record: { [key: string]: any } | undefined,
    onChange: (arg0: { [key: string]: any }) => void,
  ) => JSX.Element;
  styles: { [key: string]: any } | undefined;
  handleCancel: () => void;
  handleConfirm: () => void;
}

const FormWidget = (props: Props) => {
  const { caster, spell, render, styles, handleConfirm, handleCancel } = props;

  const casterName = Object.values(caster ? caster : {})[0];

  const [record, setRecord] = useState<{ [key: string]: any } | {}>();

  const changeRecord = (newRecord: { [key: string]: any }) => {
    setRecord(newRecord);
  };

  return (
    <StyledFormWidget component="form" customStyles={styles}>
      <Box
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Typography variant="h6">
          {`${spell === "Add" ? "Add New Template To" : "Edit Template From"} ${
            casterName[0].toUpperCase() + casterName.slice(1).toLowerCase()
          } Category`}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
