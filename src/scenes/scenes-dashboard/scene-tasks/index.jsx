import { Button, Modal } from "reactstrap";
import { useAppContext } from "../../../contexts/app-context";
import { useState } from "react";
import TaskItem from "../../../components/item-task";
import AddTaskModal from "../../../components/add-task-modal";

export default function TasksScene() {
  const { tasks } = useAppContext();

  const [addTaskModal, setAddTaskModal] = useState(false);

  return (
    <div>
      <Button color="" onClick={() => setAddTaskModal(true)}>
        + Add new task
      </Button>
      <div className="mt-3">
        <h6 className="fw-bold">Incomplete</h6>
        <div className="d-flex flex-column gap-3">
          {tasks
            .filter((t) => !t.isCompleted)
            .map((t) => (
              <div key={t.id} className="w-100">
                <TaskItem {...t} />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-3">
        <h6 className="fw-bold">Complete</h6>
        <div className="d-flex flex-column gap-3">
          {tasks
            .filter((t) => t.isCompleted)
            .map((t) => (
              <div key={t.id} className="w-100">
                <TaskItem {...t} />
              </div>
            ))}
        </div>
      </div>

      <AddTaskModal
        isOpen={addTaskModal}
        toggle={() => setAddTaskModal(!addTaskModal)}
      />
    </div>
  );
}
