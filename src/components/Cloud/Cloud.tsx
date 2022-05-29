import React from "react";
import StyledCloud from "./StyledCloud";
import {
  siTypescript,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siExpress,
  siNestjs,
  siMongodb,
  siJira,
  siGit,
  siMysql,
  siFigma,
  siJava,
  siPython,
  siCplusplus,
  siAwslambda,
} from "simple-icons/icons";
import { ICloud } from "react-icon-cloud";
import Icon from "../Icon/Icon";

interface Props {}

const staticIcons = [
  siTypescript,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siExpress,
  siNestjs,
  siMongodb,
  siJira,
  siGit,
  siMysql,
  siFigma,
  siJava,
  siPython,
  siCplusplus,
  siAwslambda,
];

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "50vh",
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  },
};

const Cloud = (props: Props) => {
  return (
    <StyledCloud {...cloudProps}>
      {staticIcons.map((icon) => (
        <Icon icon={icon} />
      ))}
    </StyledCloud>
  );
};

export default Cloud;
