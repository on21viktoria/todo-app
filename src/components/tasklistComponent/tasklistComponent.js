import { TaskComponent } from "../taskComponent/taskComponent";
import "./tasklistComponent.css";

// Zeigt die vom Nutzer eingegebenen To Dos als Liste an.
export const TasklistComponent = ({ functionToDeleteTask, functionToSaveChanges, toDos }) => {

  function deleteTask(idToDelete) {
    functionToDeleteTask(idToDelete);
  };

  return (
    <div>
        {toDos.map((toDo) => (
          <TaskComponent functionToSaveChanges={functionToSaveChanges} deleteTask={deleteTask} task={toDo} key={toDo.id}/>
        ))}
    </div>
  );
};
