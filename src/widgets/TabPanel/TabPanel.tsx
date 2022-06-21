import React, { ReactNode } from "react";
import StyledTabPanel from "./StyledTabPanel";

interface Props {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;

  return (
    <StyledTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </StyledTabPanel>
  );
};

export default TabPanel;
