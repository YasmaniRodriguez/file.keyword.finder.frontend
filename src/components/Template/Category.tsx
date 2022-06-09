import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../assets/themes";

interface Props {
  name: string;
  children?: JSX.Element | ReactNode;
}

const Category = (props: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          background: theme.colors.tertiary,
          height: "7vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            color: theme.colors.pentarius,
          }}
        >
          {props.name}
        </Typography>
      </Box>

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
