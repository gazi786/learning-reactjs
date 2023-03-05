import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DayNavigator from "../Utils/DynamicElements/DayNavigator";
import { useLocation } from "react-router-dom";

const WeekEight = ({ linkRoutes }) => {
  const location = useLocation();
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" component="h4" marginTop={3}>
            Week 7
          </Typography>
        </Box>
        <DayNavigator
          linkRoutes={linkRoutes}
          location={location}
          weekPath="/week-seven"
        />
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        >
          This week we will be learning about React Hooks. Hooks are a new way
          to use state and other React features without writing a class.
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        >
          Hooks are backwards compatible, so you can use them in existing
          projects without rewriting any existing code. Hooks are also
          completely opt-in, so you can try them in a few components without
          rewriting any existing code. Hooks are a new way to use state and
          other React features without writing a class.
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        >
          Hooks are backwards compatible, so you can use them in existing
          projects without rewriting any existing code. Hooks are also
          completely opt-in, so you can try them in a few components without
          rewriting any existing code.
        </Typography>
      </Box>
    </Container>
  );
};

export default WeekEight;
