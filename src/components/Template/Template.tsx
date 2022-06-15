import React, { useState, useContext } from "react";
import { Box, Typography, Button, IconButton, Card } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import StyledCopywriting from "./StyledTemplate";
import { theme } from "../../assets/themes";
import Form from "./Form";
import Board from "./Board";
import Category from "./Category";
import ListWidget from "../../widgets/ListWidget/ListWidget";
import FloatingActionButton from "../../widgets/FloatingActionButton/FloatingActionButton";
import { Templates } from "../../assets/types";

interface Props {}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);
  const [selected, setSelected] = useState<Templates | undefined>();
  const [open, setOpen] = useState(true);

  const handleSelected = (arg0: Templates) => {
    if (!open) {
      setSelected(arg0);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

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
                  handleClick={handleSelected}
                  list={appCtx.availableTemplates?.filter(
                    (obj) => obj.category === category,
                  )}
                />
              ) : (
                <ListWidget
                  handleClick={handleSelected}
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
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            flex: "350px",
            border: `solid 1px ${theme.colors.secondary}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "7vh",
              display: "flex",
              padding: "5px",
              alignItems: "center",
              background: theme.colors.tertiary,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                maxHeight: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: theme.colors.pentarius,
              }}
            >
              {selected?.name}
            </Typography>
            {selected?.name.length === 0 ? (
              <></>
            ) : open ? (
              <></>
            ) : (
              <Button onClick={handleOpen} variant="outlined" size="small">
                Edit
              </Button>
            )}
          </Box>
          <Box sx={{ height: "90%" }}>
            {open ? (
              <Form open={open} />
            ) : (
              <Board keywords={selected?.keywords} deleteKeyword={() => {}} />
            )}
            <FloatingActionButton />
          </Box>
        </Box>
      </Box>
    </StyledCopywriting>
  );
};

export default Template;
