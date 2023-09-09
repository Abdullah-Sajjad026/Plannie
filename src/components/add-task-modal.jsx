import { Button, Input, Label, Modal } from "reactstrap";
import { useAppContext } from "../contexts/app-context";

export default function AddTaskModal({ isOpen, toggle }) {
  const { addTask } = useAppContext();

  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const dueDate = e.target.elements.dueDate.value;

    addTask({ title, dueDate });
    toggle();
  };

  return (
    <Modal {...{ isOpen, toggle }}>
      <div className="p-3">
        <h5 className="fw-bold">Add new task</h5>
        <form onSubmit={handleAddTask} className="mt-3">
          <div className="mb-3">
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Task Title"
              required
              className="border-0 border-bottom rounded-0"
            />
          </div>

          <div className="mb-3">
            <Label for="dueDate" className="form-label">
              Due Date
            </Label>
            <Input
              type="datetime-local"
              name="dueDate"
              id="dueDate"
              required
              className="border-0 border-bottom rounded-0"
            />
          </div>

          <div className="d-flex justify-content-end">
            <Button type="submit" color="black">
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
