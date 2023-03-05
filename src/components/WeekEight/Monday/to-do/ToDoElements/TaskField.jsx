import { Box, Typography } from "@mui/material";
import React from "react";

const TaskField = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" component="h6" margin={2}>
        Task Field
      </Typography>
    </Box>
  );
};

export default TaskField;
