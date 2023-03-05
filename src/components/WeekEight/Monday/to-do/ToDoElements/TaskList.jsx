import { Box, Typography } from "@mui/material";
import React from "react";

const TaskList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" component="h6" margin={2}>
        Task List
      </Typography>
    </Box>
  );
};

export default TaskList;
