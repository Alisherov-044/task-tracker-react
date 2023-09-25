import { DeleteIcon } from "../../assets/icons";
import { TaskCardInterface } from "../../interface";

export function TaskCard({ task, onUpdate, onDelete }: TaskCardInterface) {
  const { id, text, day, reminder } = task;

  return (
    <div
      className={`task__card ${reminder ? "reminded" : ""}`}
      onDoubleClick={() => onUpdate?.(task)}
    >
      <h3 className="task__card--text">{text}</h3>
      <h5 className="task__card--day">{day}</h5>
      <DeleteIcon className="delete--icon" onClick={() => onDelete?.(id)} />
    </div>
  );
}
