import ReactRouter from "./ReactRouter/ReactRouter";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <ReactRouter />;

    default:
      return null;
  }
};

export default ExerciseContent;
