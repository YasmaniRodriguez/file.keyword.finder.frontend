import React from "react";
import StyledIcon from "./StyledIcon";

import { renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

interface Props {
  icon: SimpleIcon;
}

const Icon = (props: Props) => {
  const { icon } = props;
  return (
    <StyledIcon>
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
    </StyledIcon>
  );
};

export default Icon;
