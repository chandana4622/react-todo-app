import { useEffect, useState } from "react";

function useTodo() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load localStorage
//   useEffect(() => {

//     const storedTodos =
//       JSON.parse(localStorage.getItem("todos"));

//     if (storedTodos) {
//       setTodos(storedTodos);
//     }

//   }, []);

  // Save localStorage
  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);

  // Add Task
  function addTask() {

    if (task.trim() === "") return alert('Enter task');

    if (editIndex !== null) {

      const updatedTodos = [...todos];

      updatedTodos[editIndex].text = task;

      setTodos(updatedTodos);

      setEditIndex(null);

    } else {

      const newTask = {
        text: task,
        completed: false
      };

      setTodos([...todos, newTask]);
    }

    setTask("");
  }

  // Delete Task
  function deleteTask(index) {

    const updatedTodos =
      todos.filter((item, i) => i !== index);

    setTodos(updatedTodos);
  }

  // Edit Task
  function editTask(index) {

    setTask(todos[index].text);

    setEditIndex(index);
  }

  // Complete Task
  function toggleComplete(index) {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  }

  return {
    task,
    setTask,
    todos,
    addTask,
    deleteTask,
    editTask,
    editIndex,
    toggleComplete
  };
}

export default useTodo;