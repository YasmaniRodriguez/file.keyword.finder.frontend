import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme, media } from "../../assets/themes";

interface Props {
  index: number;
}

const StyledCategory = styled(Box)`
  border: solid 1px ${theme.colors.secondary};
  border-radius: 5px;
  height: 30vh;
  margin: 10px 0;
`;

const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  ${media.greaterThanMobile} {
    justify-content: flex-end;
  }
`;

const generateMultiColorCategory = (props: Props) => {
  const NEED_WHITE_COLOR = [3, 4];
  const colorIndex = (props.index % 5) + 1;
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
  const colorText = needWhite ? "white" : "var(--theme-body-bg)";

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};`;
};

const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  ${generateMultiColorCategory}
`;

export { StyledCategory, CategoryList, CategoryListItem };
