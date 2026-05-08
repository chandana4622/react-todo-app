function AddTask({
  task,
  setTask,
  addTask,
  editIndex
}) {

  return (
    <div className="input-section">

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

    </div>
  );
}

export default AddTask;