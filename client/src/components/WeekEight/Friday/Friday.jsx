import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import ExerciseContent from "./ExerciseContent";
import ExerciseButton from "../../Utils/DynamicElements/ExerciseButton";
import DayNavigator from "../../Utils/DynamicElements/DayNavigator";
import DisplayDate from "../../Utils/WeirdFeatures/DisplayDate";

const exercises = [
  { path: "/week-eight/friday/exercise1", label: "Exercise 1" },
];

const Friday = ({ linkRoutes }) => {
  const navigate = useNavigate();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const location = useLocation();

  const handleExerciseClick = (index) => {
    setCurrentExerciseIndex(index);
    navigate(exercises[index].path);
  };
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h4" component="h4" marginTop={3}>
            Week 8 - Friday Class
          </Typography>
          <DisplayDate location={location} />
        </Box>
        <DayNavigator
          linkRoutes={linkRoutes}
          location={location}
          weekPath="/week-eight"
        />
      </Box>
      <Box>
        <Typography variant="h6" component="h6" marginTop={3}>
          Exercises
        </Typography>
        <Typography variant="p" component="p" my={2}>
          Currently Viewing Exercise: {currentExerciseIndex + 1}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          {exercises.map((exercise, index) => (
            <ExerciseButton
              key={index}
              exercise={exercise}
              index={index}
              onClick={handleExerciseClick}
              currentExerciseIndex={currentExerciseIndex}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ marginTop: 4, borderTop: "solid" }}>
        <ExerciseContent currentExerciseIndex={currentExerciseIndex} />
      </Box>
    </Container>
  );
};

export default Friday;
