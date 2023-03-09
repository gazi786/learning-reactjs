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

        {tasksArray.map((task) => (
          <Box key={task.id}>
            <Typography component="span" sx={{ mr: 2 }}>
              {task.id}. {task.name}
            </Typography>
            <Button sx={{ mr: 1 }} onClick={() => deleteTaskFromArray(task.id)}>
              <DeleteRounded />
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TaskList;
