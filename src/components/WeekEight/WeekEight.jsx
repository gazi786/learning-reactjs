import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DayNavigator from "../Utils/DynamicElements/DayNavigator";
import { useLocation } from "react-router-dom";

const WeekNine = ({ linkRoutes }) => {
  const location = useLocation();
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" component="h4" marginTop={3}>
            Week 8
          </Typography>
        </Box>
        <DayNavigator
          linkRoutes={linkRoutes}
          location={location}
          weekPath="/week-eight"
        />
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        >
          Week 7 Recap. Recaping the previous week's content is a good way to
          get around to the new content. It also helps you to remember what you
          have learned. It is also a good way to get back into the swing of
          things. What we learned was focused around event conditional
          rendering, lifting state up, react-router-dom. React Router has
          multiple useful hooks to help us navigate through multiple components
          of our SPA.
          <code>
            BrowserRouter, Link, NavLink, Redirect, Route, useHistory,
            useLocation, useNavigate, useParams, useRouteMatch, ...
          </code>
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        >
          Week 8 is focused on putting the learned principles in to action. So
          we will be doing a todo app.
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ textAlign: "justify", mb: 2 }}
        ></Typography>
      </Box>
    </Container>
  );
};

export default WeekNine;
