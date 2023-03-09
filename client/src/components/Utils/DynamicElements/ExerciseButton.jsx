import React from "react";
import { Button } from "@mui/material";
import { StyledLinkBtn } from "./StyledElements";

const ExerciseButton = ({ exercise, index, onClick, currentExerciseIndex }) => {
  const isDisabled = currentExerciseIndex === index;
  return (
    <StyledLinkBtn
      key={index}
      to={exercise.path}
      onClick={() => onClick(index)}
    >
      <Button variant="contained" disabled={isDisabled}>
        {exercise.label}
      </Button>
    </StyledLinkBtn>
  );
};

export default ExerciseButton;
