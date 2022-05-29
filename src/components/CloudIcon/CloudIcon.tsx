import React from "react";
import StyledCloudIcon from "./StyledCloudIcon";

import { renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

interface Props {
  icon: SimpleIcon;
}

const Icon = (props: Props) => {
  const { icon } = props;
  return (
    <StyledCloudIcon>
      {renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })}
    </StyledCloudIcon>
  );
};

export default Icon;
