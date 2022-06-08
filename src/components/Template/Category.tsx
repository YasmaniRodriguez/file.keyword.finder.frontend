import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";

interface Props {
  name: string;
  children?: JSX.Element | ReactNode;
}

const Category = (props: Props) => {
  return (
    <Box sx={{ width: "100%", padding: "5px" }}>
      <Typography
        sx={{
          padding: "1vh 5px",
          background: theme.colors.tertiary,
          verticalAlign: "center",
          borderRadius: "5px",
          textTransform: "capitalize",
          fontWeight: "bold",
          color: theme.colors.pentarius,
        }}
      >
        {props.name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          cursor: "pointer",
          "& .MuiPaper-root": { height: "6vh", margin: "5px" },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Category;
