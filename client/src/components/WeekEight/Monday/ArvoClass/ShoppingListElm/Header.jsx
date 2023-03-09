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
      <Typography variant="h4" component="h4" margin={2}>
        Shopping List
      </Typography>
    </Box>
  );
};

export default Header;
