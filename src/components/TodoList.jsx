import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTask,
  editTask,
  toggleComplete
}) {

  return (
    <ul>

      {
        todos.map((item, index) => (

          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
          />
        ))
      }

    </ul>
  );
}

export default TodoList;