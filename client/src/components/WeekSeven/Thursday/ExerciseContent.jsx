import EventsRendering from "./EventsCondRendering/EventsRendering";
import LiftingStateUp from "./LiftingState/LiftingStateUp";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <EventsRendering />;
    case 1:
      return <LiftingStateUp />;
    default:
      return null;
  }
};

export default ExerciseContent;
