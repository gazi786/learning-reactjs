import NodeJS from "./NodeJS/NodeJS";
import TheWeatherAPI from "./TheWeatherAPI/TheWeatherAPI";
const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <NodeJS />;
    case 1:
      return <TheWeatherAPI />;
    default:
      return null;
  }
};

export default ExerciseContent;
