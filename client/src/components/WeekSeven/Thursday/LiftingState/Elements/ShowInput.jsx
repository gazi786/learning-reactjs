import React from "react";
import { Box, Divider } from "@mui/material";

const ShowInput = ({ inputValue }) => {
  return (
    <Box>
      We showing input value below the divider...
      <Divider />
      <Box
        sx={{
          width: "100%",
          maxWidth: "32rem",
          minHeight: "9rem",
          wordWrap: "break-word",
        }}
      >
        {inputValue}
      </Box>
    </Box>
  );
};

export default ShowInput;
