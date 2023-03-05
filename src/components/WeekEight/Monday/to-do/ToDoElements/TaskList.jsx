import { Box, Chip, Divider, Typography } from "@mui/material";
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
        <Divider>
          <Chip label="Current Tasks" />
        </Divider>
      </Typography>
      <Box>
        <Typography variant="p" component="p" mb={2} ml={2}></Typography>
      </Box>
    </Box>
  );
};

export default TaskList;
