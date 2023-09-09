export const dummyTasks = [
  {
    id: 1,
    title: "Water Plants",
    isCompleted: false,
    // adding a due date which we will use with JS Date object to check if the task is overdue
    dueDate: new Date("2021-09-01"),
  },
  {
    id: 2,
    title: "Walk the dog",
    isCompleted: false,
    dueDate: new Date("2021-09-02"),
  },
  {
    id: 3,
    title: "Go to the gym",
    isCompleted: false,
    dueDate: new Date("2021-09-03"),
  },
  {
    id: 4,
    title: "Buy groceries",
    isCompleted: false,
    dueDate: new Date("2021-09-04"),
  },
  {
    id: 5,
    title: "Pay bills",
    isCompleted: true,
    dueDate: new Date("2021-09-05"),
  },
  {
    id: 6,
    title: "Call mom",
    isCompleted: true,
    dueDate: new Date("2021-09-06"),
  },
  {
    id: 7,
    title: "Buy birthday gift",
    isCompleted: true,
    dueDate: new Date("2021-09-07"),
  },
];
