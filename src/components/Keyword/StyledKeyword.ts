import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { theme, media } from "../../assets/themes";

interface Props {
  index: number;
}

const generateMultiColorKeyword = (props: Props) => {
  const NEED_WHITE_COLOR = [3, 4];
  const colorIndex = (props.index % 5) + 1;
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
  const colorText = needWhite ? "white" : "var(--theme-body-bg)";

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};`;
};

const StyledKeyword = styled(Box)`
  border: solid 1px ${theme.colors.secondary};
  border-radius: 5px;
  height: 30vh;
  margin: 10px 0;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(214, 214, 214, 0.48);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 100px;
  }
`;

const KeywordList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  ${media.greaterThanMobile} {
    justify-content: flex-end;
  }
`;

const KeywordListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${generateMultiColorKeyword}

  & svg {
    margin: 1px;
  }
`;

export { StyledKeyword, KeywordList, KeywordListItem };
