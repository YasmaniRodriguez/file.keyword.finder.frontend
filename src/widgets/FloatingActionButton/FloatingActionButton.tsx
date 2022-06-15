import React, { useState } from "react";
import StyledFloatingActionButton from "./StyledFloatingActionButton";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  SpeedDialProps,
} from "@mui/material";
import {
  Extension as ExtensionIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";

interface Props {}

const actions = [
  { icon: <ExtensionIcon />, name: "Add Template" },
  { icon: <CategoryIcon />, name: "Add Group" },
];

const FloatingActionButton = (props: Props) => {
  const [hidden, setHidden] = useState(false);
  const [direction, setDirection] = useState<SpeedDialProps["direction"]>("up");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledFloatingActionButton
      sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={hidden}
        sx={{ position: "absolute", bottom: 350, right: 16 }}
        icon={<SpeedDialIcon />}
        direction={direction}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </StyledFloatingActionButton>
  );
};

export default FloatingActionButton;
