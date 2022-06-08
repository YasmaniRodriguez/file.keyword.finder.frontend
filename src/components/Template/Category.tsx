import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
  children?: JSX.Element | ReactNode;
}

const Category = (props: Props) => {
  console.log(props.name);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          padding: "1vh 5px",
          background: "green",
          verticalAlign: "center",
        }}
      >
        {props.name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          "& div": { height: "6vh", margin: "5px", border: "solid 1px red" },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Category;
