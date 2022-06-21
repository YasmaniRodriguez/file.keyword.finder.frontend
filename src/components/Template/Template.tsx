import React, {
  useState,
  useContext,
  SyntheticEvent,
  KeyboardEvent,
  MouseEvent,
  ChangeEvent,
} from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Chip,
  TextField,
} from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import StyledTemplate from "./StyledTemplate";
import { theme, cardContainerStyles, scrollStyles } from "../../assets/themes";
//import Form from "./Form";
//import Board from "./Board";
//import Category from "./Category";
//import ListWidget from "../../widgets/ListWidget/ListWidget";
import TabPanel from "../../widgets/TabPanel/TabPanel";
//import FAB from "../../widgets/FloatingActionButton/FloatingActionButton";
import { Templates } from "../../assets/types";

interface Props {}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);

  //  const [selected, setSelected] = useState<Templates | undefined>();

  const [openCategoryForm, setOpenCategoryForm] = useState(false);
  const [category, setCategory] = useState<string | undefined>();
  const [openTemplateForm, setOpenTemplateForm] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);

  // const handleSelected = (arg0: Templates) => {
  //   if (!openTemplateForm) {
  //     setSelected(arg0);
  //   }
  // };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleOpenTemplateForm = () => {
    setOpenTemplateForm(!openTemplateForm);
  };

  const handleOpenCategoryForm = () => {
    setOpenCategoryForm(!openCategoryForm);
  };

  const changeCategory = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let value = (event.currentTarget as HTMLInputElement).value;
    setCategory(value);
  };

  const handleCategoryFormKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && category !== undefined) {
      handleOpenCategoryForm();
      setCategory(undefined);
    }
  };

  return (
    <StyledTemplate>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          padding: "10px",
          flexDirection: "column",
          border: `1px ${theme.colors.secondary}`,
          borderStyle: "solid solid solid solid",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", marginBottom: "5px" }}>
          {openCategoryForm ? (
            <TextField
              id="category"
              size="small"
              value={category}
              onChange={(e) => changeCategory(e)}
              onKeyDown={(e) => handleCategoryFormKeyDown(e)}
              placeholder="Category Name"
              fullWidth
            />
          ) : (
            <Button
              sx={{ width: "100%" }}
              variant="outlined"
              onClick={handleOpenCategoryForm}
            >
              Add New Category
            </Button>
          )}
        </Box>

        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={selectedTab}
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
      <Box
        sx={{
          width: "70%",
          border: `1px ${theme.colors.secondary}`,
          borderStyle: "solid solid solid none",
        }}
      >
        {appCtx?.availableCategories.map((category, key) => (
          <TabPanel key={key} value={selectedTab} index={key}>
            {category.toLowerCase() !== "generic" ? (
              <Box sx={cardContainerStyles}>
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
                          ...scrollStyles,
                        }}
                      >
                        {template?.keywords?.map((keyword, key) => (
                          <Chip
                            sx={{ margin: "1px" }}
                            key={key}
                            label={keyword}
                          />
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
              <Box sx={cardContainerStyles}>
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
                          ...scrollStyles,
                        }}
                      >
                        {template?.keywords?.map((keyword, key) => (
                          <Chip
                            sx={{ margin: "1px" }}
                            key={key}
                            label={keyword}
                          />
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
  /* <Box>
        <Box>
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
        <Box>
          <Box>
            <Typography>
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
