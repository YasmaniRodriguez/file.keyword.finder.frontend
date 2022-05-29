import React from "react";
import StyledWordCloud from "./StyledWordCloud";
import {
  siTypescript,
  siJavascript,
  siJava,
  siNextdotjs,
  siNodedotjs,
} from "simple-icons/icons";
import { Cloud, ICloud } from "react-icon-cloud";
import CloudIcon from "../CloudIcon/CloudIcon";

interface Props {}

const staticIcons = [
  siTypescript,
  siJavascript,
  siJava,
  siNextdotjs,
  siNodedotjs,
];

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
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

const WordCloud = (props: Props) => {
  return (
    <StyledWordCloud>
      <Cloud {...cloudProps}>
        {staticIcons.map((i) => (
          <CloudIcon icon={i} />
        ))}
      </Cloud>
    </StyledWordCloud>
  );
};

export default WordCloud;
