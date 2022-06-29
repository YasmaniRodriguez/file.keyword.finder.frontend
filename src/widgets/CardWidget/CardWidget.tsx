import React, { useState, MouseEvent } from "react";
import StyledCardWidget from "./StyledCardWidget";
import {
  Box,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Fullscreen as FullscreenIcon,
} from "@mui/icons-material";

interface Props {
  styles?: { [key: string]: any };
  variant: "elevation" | "outlined" | undefined;
  header?: {
    title: string;
    subtitle?: string;
    avatar?: JSX.Element;
    options?: { label: string; action: () => void }[];
  };
  media?: {
    element: JSX.Element;
    action?: () => void;
  };
  content?: JSX.Element;
  primaryButton?: { label: string; action: () => void };
  secondaryButton?: { label: string; action: () => void };
}

const ITEM_HEIGHT = 48;

const CardWidget = (props: Props) => {
  const {
    variant,
    header,
    media,
    content,
    primaryButton,
    secondaryButton,
    styles,
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMoreOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreOptionsClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledCardWidget variant={variant} styles={styles}>
      {header ? (
        <CardHeader
          avatar={<Avatar aria-label="avatar">{header.avatar}</Avatar>}
          action={
            <Box>
              <IconButton
                aria-label="more"
                id="options-button"
                aria-controls={open ? "options-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleMoreOptionsClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="options-menu"
                MenuListProps={{
                  "aria-labelledby": "options-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMoreOptionsClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                  },
                }}
              >
                {header.options?.map((option, key) => (
                  <MenuItem
                    key={key}
                    onClick={(e) => {
                      option.action();
                      handleMoreOptionsClose();
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          }
          title={header.title}
          subheader={header.subtitle}
        />
      ) : (
        <></>
      )}
      {media ? (
        media.action ? (
          <CardMedia>
            <IconButton
              aria-label="full-screen"
              id="card-media-full-screen"
              onClick={(e) => {
                media.action
                  ? media.action()
                  : console.warn("action is undefined");
              }}
            >
              <FullscreenIcon />
            </IconButton>
            {media.element}
          </CardMedia>
        ) : (
          <CardMedia>{media.element}</CardMedia>
        )
      ) : (
        <></>
      )}

      <CardContent>{content}</CardContent>
      <CardActions>
        {secondaryButton ? (
          <Button
            size="small"
            color="secondary"
            onClick={(e) => {
              secondaryButton?.action();
            }}
          >
            {secondaryButton?.label}
          </Button>
        ) : (
          <></>
        )}

        {primaryButton ? (
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              primaryButton?.action();
            }}
          >
            {primaryButton?.label}
          </Button>
        ) : (
          <></>
        )}
      </CardActions>
    </StyledCardWidget>
  );
};

export default CardWidget;
