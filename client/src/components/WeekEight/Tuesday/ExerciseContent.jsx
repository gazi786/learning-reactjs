import MaterialUI from "./MaterialUI/MaterialUI";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <MaterialUI />;
    case 1:
      return;
    default:
      return null;
  }
};

export default ExerciseContent;
