import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
});

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialTasks);

  /**
   * Adds a new task to the list of tasks
   * @param {object} task
   * @param {string} task.title
   * @param {Date} task.dueDate
   */
  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  /**
   * Toggles the completion status of a task
   * @param {number} id
   */

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
