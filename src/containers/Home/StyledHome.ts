import styled from "@emotion/styled";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: auto;
  & > div {
    flex-grow: 10;
    display: flex;
  }
`;

export default StyledHome;
