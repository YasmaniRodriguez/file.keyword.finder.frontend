const theme = {
  colors: {
    primary: "var(--brand-color_1)",
    secondary: "var(--brand-color_2)",
    tertiary: "var(--brand-color_3)",
    quaternary: "var(--brand-color_4)",
    pentarius: "var(--brand-color_5)",
    senary: "var(--brand-color_6)",
    septenary: "var(--brand-color_7)",
  },
  fontSizes: {
    xs: "0.5rem",
    s: "0.8rem",
    m: "1rem",
    l: "1.5rem",
  },
  paddings: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
  },
};

const media = {
  greaterThanMobile: "@media screen and (min-width: 55rem)",
};

const scrollStyles = {
  " &::-webkit-scrollbar": { width: "12px" },
  " &::-webkit-scrollbar-track": {
    background: "rgba(255, 255, 255, 0.2)",
    WebkitBackdropFilter: "blur(5px)",
    backdropFilter: "blur(5px)",
  },
  " &::-webkit-scrollbar-thumb": {
    background: "rgba(214, 214, 214, 0.48)",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
  },
};

const cardContainerStyles = {
  padding: "10px",
  height: "100%",
  with: "100%",
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",

  "& .MuiPaper-root": {
    margin: "5px",
    height: "250px",
    width: "250px",
  },
  overflow: "hidden scroll",
  ...scrollStyles,
};

export { theme, media, scrollStyles, cardContainerStyles };
