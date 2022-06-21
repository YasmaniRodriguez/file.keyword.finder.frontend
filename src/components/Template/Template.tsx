import React, { useState, useContext, SyntheticEvent } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Chip,
} from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import StyledTemplate from "./StyledTemplate";
import { theme } from "../../assets/themes";
import Form from "./Form";
import Board from "./Board";
import Category from "./Category";
import ListWidget from "../../widgets/ListWidget/ListWidget";
import TabPanel from "../../widgets/TabPanel/TabPanel";
//import FAB from "../../widgets/FloatingActionButton/FloatingActionButton";
import { Templates } from "../../assets/types";

interface Props {}

const BoxStyles = {
  padding: "10px",
  height: "100%",
  with: "100%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",

  "& .MuiPaper-root": {
    margin: "5px",
    height: "250px",
    width: "250px",
  },
  overflow: "hidden scroll",
  " &::-webkit-scrollbar": { width: "12px" },
  " &::-webkit-scrollbar-track": {
    background: "rgba(255, 255, 255, 0.2)",
    WebkitBackdropFilter: "blur(5px)",
    backdropFilter: "blur(5px)",
  },
  " &::-webkit-scrollbar-thumb": {
    background: "rgba(214, 214, 214, 0.48)",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
  },
};

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);

  const [selected, setSelected] = useState<Templates | undefined>();

  const [openForm, setOpenForm] = useState(true);

  const [tab, setTab] = useState(0);

  const handleSelected = (arg0: Templates) => {
    if (!openForm) {
      setSelected(arg0);
    }
  };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <StyledTemplate>
      <Box
        sx={{
          border: "solid 1px red",
          width: "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button variant="outlined">Add new Category</Button>
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={tab}
          selectionFollowsFocus
          onChange={handleTabChange}
          aria-label="templates category tabs"
          sx={{
            "& .MuiTab-root": { alignItems: "flex-start" },
          }}
        >
          {appCtx?.availableCategories.map((category, key) => (
            <Tab key={key} label={category} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ border: "solid 1px red", width: "70%" }}>
        {appCtx?.availableCategories.map((category, key) => (
          <TabPanel value={tab} index={key}>
            {category.toLowerCase() !== "generic" ? (
              <Box sx={BoxStyles}>
                {appCtx?.availableTemplates
                  ?.filter((template) => template.category === category)
                  .map((template, key) => (
                    <Card key={key}>
                      <CardHeader
                        avatar={<Avatar>T</Avatar>}
                        title={template.name}
                        subheader={template.category}
                      />
                      <CardContent
                        sx={{
                          height: "45%",
                          display: "flex",
                          flexWrap: "wrap",
                          overflow: "hidden scroll",
                          " &::-webkit-scrollbar": { width: "12px" },
                          " &::-webkit-scrollbar-track": {
                            background: "rgba(255, 255, 255, 0.2)",
                            WebkitBackdropFilter: "blur(5px)",
                            backdropFilter: "blur(5px)",
                          },
                          " &::-webkit-scrollbar-thumb": {
                            background: "rgba(214, 214, 214, 0.48)",
                            WebkitBackdropFilter: "blur(10px)",
                            backdropFilter: "blur(10px)",
                          },
                        }}
                      >
                        {template?.keywords?.map((keyword, key) => (
                          <Chip key={key} label={keyword} />
                        ))}
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="secondary">
                          Delete
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
              </Box>
            ) : (
              <Box sx={BoxStyles}>
                {appCtx.availableTemplates
                  ?.filter((obj) => obj.category === undefined)
                  .map((template, key) => (
                    <Card key={key}>
                      <CardHeader
                        avatar={<Avatar>T</Avatar>}
                        title={template.name}
                        subheader={template.category}
                      />
                      <CardContent
                        sx={{
                          height: "45%",
                          display: "flex",
                          flexWrap: "wrap",
                          overflow: "hidden scroll",
                          " &::-webkit-scrollbar": { width: "12px" },
                          " &::-webkit-scrollbar-track": {
                            background: "rgba(255, 255, 255, 0.2)",
                            WebkitBackdropFilter: "blur(5px)",
                            backdropFilter: "blur(5px)",
                          },
                          " &::-webkit-scrollbar-thumb": {
                            background: "rgba(214, 214, 214, 0.48)",
                            WebkitBackdropFilter: "blur(10px)",
                            backdropFilter: "blur(10px)",
                          },
                        }}
                      >
                        {template?.keywords?.map((keyword, key) => (
                          <Chip key={key} label={keyword} />
                        ))}
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="secondary">
                          Delete
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  ))}
              </Box>
            )}
          </TabPanel>
        ))}
      </Box>
    </StyledTemplate>
  );
};

export default Template;

{
  /* <Box
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
              webkitBackdropFilter: " blur(5px)",
              backdropFilter: "blur(5px)",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(214, 214, 214, 0.48)",
              webkitBackdropFilter: "blur(10px)",
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
      </Box> */
}
