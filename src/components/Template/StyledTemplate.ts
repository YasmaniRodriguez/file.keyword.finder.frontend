import styled from "@emotion/styled";
import { Box, Tabs as TabsMUI } from "@mui/material";
import { theme } from "../../assets/themes";

interface Props {}

const Container = styled(Box)<Props>`
  display: flex;
  height: 70vh;
  width: 70vw;

  & .MuiPaper-root {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
  }
`;

const CategoryTabWrapper = styled(Box)<Props>`
  width: 30%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border: 1px ${theme.colors.secondary};
  border-style: solid solid none none;
`;

const CategoryFormWidget = styled(Box)<Props>`
  width: 100%;
  display: flex;
  margin-bottom: 5px;

  & button {
    width: 100%;
  }
`;

const Tabs = styled(TabsMUI)<Props>`
  & .MuiTab-root {
    align-items: flex-start;
  }
`;

const TemplateTabPanelWrapper = styled(Box)<Props>`
  width: 70%;
  border: 1px ${theme.colors.secondary};
  border-style: solid none none none;
`;

const TemplateTabPanelHeader = styled(Box)<Props>`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const TemplateTabPanelContent = styled(Box)<Props>`
  height: 90%;
  padding: 10px;
`;

export {
  Container,
  CategoryTabWrapper,
  CategoryFormWidget,
  Tabs,
  TemplateTabPanelWrapper,
  TemplateTabPanelHeader,
  TemplateTabPanelContent,
};
