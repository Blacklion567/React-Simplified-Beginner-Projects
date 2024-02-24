
export default function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={e => toggleTodo(id, e.target.value)}
          />
          <span data-list-text>{name}</span>
        </label>
        <button onClick={() => deleteTodo(id)} data-button-delete>
          Delete
        </button>
      </li>
    </>
  );
}
