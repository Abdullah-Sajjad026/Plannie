import { Input } from "reactstrap";
import { useAppContext } from "../contexts/app-context";

export default function TaskItem({ id, title, isCompleted, dueDate }) {
  const { toggleTask } = useAppContext();
  return (
    <div className={`d-flex gap-2 ${isCompleted ? "text-muted" : ""}`}>
      <Input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTask(id)}
      />

      <div className="d-flex flex-column gap-2">
        <h6>{title}</h6>
        <span className="text-muted">{dueDate}</span>
      </div>
    </div>
  );
}
