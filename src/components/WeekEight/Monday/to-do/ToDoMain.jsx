import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ToDoElements/Header";
import TaskField from "./ToDoElements/TaskField";
import TaskList from "./ToDoElements/TaskList";

const ToDoMain = () => {
  return (
    <Box sx={{ pt: 3 }}>
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
            border: "solid 1px black",
            width: "100%",
            minWidth: "30rem",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Header />
            <TaskField />
            <TaskList />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ToDoMain;
