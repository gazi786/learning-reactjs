import ToDoMain from "./to-do/ToDoMain";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <ToDoMain />;
    case 1:
      return;
    default:
      return null;
  }
};

export default ExerciseContent;
