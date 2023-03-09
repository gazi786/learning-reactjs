import ShowTell from "./ShowTell";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <ShowTell />;
    case 1:
      return;
    default:
      return null;
  }
};

export default ExerciseContent;
