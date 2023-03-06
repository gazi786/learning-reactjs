import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TaskField = ({ addTaskToArray }) => {
  const [task, setTask] = useState({ id: 1, name: "Example task" });
  const changeTask = (e) => setTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTaskToArray(task); // Pass the task to the function
      setTask(""); // Clear the text field
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitTask}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Add your task"
          value={task}
          onChange={changeTask}
        />
        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default TaskField;
