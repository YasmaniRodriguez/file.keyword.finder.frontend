import React, { ReactNode } from "react";
import StyledItemViewer from "./StyledItemViewer";

interface Props {
  children: JSX.Element | ReactNode;
  styles: {} | undefined;
}

const ItemViewer = ({ children, styles }: Props) => {
  return <StyledItemViewer sx={styles}>{children}</StyledItemViewer>;
};

export default ItemViewer;
