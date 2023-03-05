import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1" component="h1" margin={2}>
        To-Do List
      </Typography>
    </Box>
  );
};

export default Header;
