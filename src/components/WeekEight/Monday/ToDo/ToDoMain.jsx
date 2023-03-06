import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "./ToDoElements/Header";
import TaskField from "./ToDoElements/TaskField";
import TaskList from "./ToDoElements/TaskList";

const ToDoMain = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    const id = tasksArray.length ? tasksArray[tasksArray.length - 1].id + 1 : 1;
    setTasksArray([...tasksArray, { id: id, name: task }]);
  };

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task.id !== taskToDelete));
  };

  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            ToDo App
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            We explore the use case of a todo app that allows you to add, edit,
            delete, and mark items as completed. We also explore the use of
            react-router-dom to navigate between pages.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "solid",
              borderColor: "primary.main",
              borderRadius: "1rem",
              padding: "1rem",
              borderWidth: "1px",
              width: "100%",
              maxWidth: "32rem",
            }}
          >
            <Header />
            <TaskField addTaskToArray={addTaskToArray} />
            <TaskList
              tasksArray={tasksArray}
              deleteTaskFromArray={deleteTaskFromArray}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ToDoMain;
