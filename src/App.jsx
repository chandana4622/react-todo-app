import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {

  const {
    task,
    setTask,
    todos,
    addTask,
    deleteTask,
    editTask,
    editIndex,
    toggleComplete
  } = useTodo();

  return (
    <div className="container">

      <h1>Todo App</h1>

      <AddTask
        task={task}
        setTask={setTask}
        addTask={addTask}
        editIndex={editIndex}
      />

      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default App;