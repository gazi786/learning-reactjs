import { Box, Button, Divider, Typography } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import React from "react";

const TaskList = ({ tasksArray, deleteTaskFromArray }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      <Box sx={{}}>
        <Divider
          sx={{ my: 2, width: "100%", borderTop: "3px solid #6C6C6C" }}
        ></Divider>
        <Typography variant="h5" component="h5" margin={2}>
          Current Tasks
        </Typography>

        {tasksArray.map((task, index) => (
          <Typography variant="p" component="p" margin={2}>
            {index + 1}. {task}
            <Button onClick={() => deleteTaskFromArray(task)}>
              <DeleteRounded />
            </Button>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TaskList;
