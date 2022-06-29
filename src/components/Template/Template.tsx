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
  Tab,
  Chip,
  TextField,
} from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import * as S from "./StyledTemplate";
import { cardContainerStyles, scrollStyles } from "../../assets/themes";
import TemplateForm from "./TemplateForm";
//import Board from "./Board";
//import Category from "./Category";
//import ListWidget from "../../widgets/ListWidget/ListWidget";
import TabPanel from "../../widgets/TabPanel/TabPanel";
import FormWidget from "../../widgets/FormWidget/FormWidget";
import { Categories, Templates } from "../../assets/types";

interface Props {
  availableCategories: Categories[] | undefined;
  availableTemplates: Templates[] | undefined;
  addCategory: (arg0: string) => void;
  deleteCategory: (arg0: string) => void;
  addTemplate: (arg0: Templates) => void;
  deleteTemplate: (arg0: Templates) => void;
}

const Template = (props: Props) => {
  const appCtx = useContext(AppContext);

  const {
    availableCategories,
    availableTemplates,
    addCategory,
    deleteCategory,
    addTemplate,
    deleteTemplate,
  } = props;

  //  const [selected, setSelected] = useState<Templates | undefined>();

  const [openCategoryForm, setOpenCategoryForm] = useState(false);
  const [category, setCategory] = useState<string | undefined>();
  const [openTemplateForm, setOpenTemplateForm] = useState(false);

  const [selectedTab, setSelectedTab] = useState({ key: 0, label: "GENERIC" });

  // const handleSelected = (arg0: Templates) => {
  //   if (!openTemplateForm) {
  //     setSelected(arg0);
  //   }
  // };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    let label = (event.currentTarget as HTMLButtonElement).innerText;
    setSelectedTab({ key: newValue, label: label });
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

  const handleCategoryFormKeyEvent = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && category !== undefined) {
      addCategory(category);
      handleOpenCategoryForm();
      setCategory(undefined);
    }
    if (event.key === "Escape") {
      handleOpenCategoryForm();
      setCategory(undefined);
    }
  };

  return (
    <S.Container>
      <S.CategoryTabWrapper>
        <S.CategoryFormWidget>
          {openCategoryForm ? (
            <TextField
              id="category"
              size="small"
              value={category}
              onChange={(e) => changeCategory(e)}
              onKeyDown={(e) => handleCategoryFormKeyEvent(e)}
              placeholder="Category Name"
              autoFocus
              fullWidth
            />
          ) : (
            <Button variant="outlined" onClick={handleOpenCategoryForm}>
              Add New Category
            </Button>
          )}
        </S.CategoryFormWidget>

        <S.Tabs
          orientation="vertical"
          variant="fullWidth"
          value={selectedTab.key}
          selectionFollowsFocus
          onChange={handleTabChange}
          aria-label="templates category tabs"
        >
          {availableCategories?.map((category, key) => (
            <Tab key={key} label={category} />
          ))}
        </S.Tabs>
      </S.CategoryTabWrapper>
      <S.TemplateTabPanelWrapper>
        <S.TemplateTabPanelHeader>
          <Typography>{`${selectedTab.label} TEMPLATES`}</Typography>
          {!openTemplateForm && (
            <Button variant="outlined" onClick={handleOpenTemplateForm}>
              Add New Template
            </Button>
          )}
        </S.TemplateTabPanelHeader>
        <S.TemplateTabPanelContent>
          {openTemplateForm ? (
            <FormWidget
              caster={{ name: selectedTab.label }}
              spell="Add"
              render={(caster, record, onChange) => (
                <TemplateForm
                  open={openTemplateForm}
                  caster={caster}
                  record={record}
                  onChange={onChange}
                />
              )}
              styles={{ width: "50%", maxHeight: "100%" }}
              handleCancel={handleOpenTemplateForm}
              handleConfirm={handleOpenTemplateForm}
            />
          ) : (
            availableCategories?.map((category, key) => (
              <TabPanel key={key} value={selectedTab.key} index={key}>
                {category.toLowerCase() !== "generic" ? (
                  <Box sx={cardContainerStyles}>
                    {availableTemplates
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
                              overflow: "hidden auto",
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
                    {availableTemplates
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
                              overflow: "hidden auto",
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
            ))
          )}
        </S.TemplateTabPanelContent>
      </S.TemplateTabPanelWrapper>
    </S.Container>
  );
};

export default Template;
