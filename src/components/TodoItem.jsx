function TodoItem({
  item,
  index,
  deleteTask,
  editTask,
  toggleComplete
}) {

  return (
    <li>

      <span
        onClick={() => toggleComplete(index)}
        className={
          item.completed ? "completed" : ""
        }
      >
        {item.text}
      </span>

      <div>

        <button
          className="edit-btn"
          onClick={() => editTask(index)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>

      </div>

    </li>
  );
}

export default TodoItem;