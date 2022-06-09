import React, { useState, useContext } from "react";
import { Box, Typography, Button, IconButton, Card } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import StyledCopywriting from "./StyledTemplate";
import { theme } from "../../assets/themes";
import Form from "./Form";
import Board from "./Board";
import Category from "./Category";
import ListWidget from "../../widgets/ListWidget/ListWidget";

interface Props {}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);
  const [open, setOpen] = useState(true);
  return (
    <StyledCopywriting>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          padding: "5px",
          border: `solid 1px ${theme.colors.secondary}`,
        }}
      >
        <Box
          sx={{
            border: `solid 1px ${theme.colors.secondary}`,
            flexGrow: 1,
            flex: "350px",
            overflow: "hidden scroll",

            "&::-webkit-scrollbar": {
              width: "12px",
            },

            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.2)",
              "-webkit-backdrop-filter": " blur(5px)",
              backdropFilter: "blur(5px)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(214, 214, 214, 0.48)",
              "-webkit-backdrop-filter": "blur(10px)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          {appCtx?.availableCategories?.map((category, key) => (
            <Category name={category} key={key}>
              {category.toLowerCase() !== "generic" ? (
                <ListWidget
                  list={appCtx.availableTemplates?.filter(
                    (obj) => obj.category === category,
                  )}
                />
              ) : (
                <ListWidget
                  list={appCtx.availableTemplates?.filter(
                    (obj) => obj.category === undefined,
                  )}
                />
              )}
            </Category>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            flex: "350px",
            border: `solid 1px ${theme.colors.secondary}`,
          }}
        >
          {open ? <Form open={open} /> : <Board />}
        </Box>
      </Box>
    </StyledCopywriting>
  );
};

export default Template;
