import ShoppingList from "./ArvoClass/ShoppingListIndex";
import ToDoMain from "./ToDo/ToDoMain";

const ExerciseContent = ({ currentExerciseIndex }) => {
  switch (currentExerciseIndex) {
    case 0:
      return <ToDoMain />;
    case 1:
      return <ShoppingList />;
    default:
      return null;
  }
};

export default ExerciseContent;
