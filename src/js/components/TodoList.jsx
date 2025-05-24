import { useState } from 'react';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, todo: task }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="container my-3 text-start">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="¿Qué hay que hacer?"
              value={task}
              onChange={handleTask}
              autoFocus
            />
          </form>

          <h2 className="text-primary">Lista de tareas</h2>

          <ul className="list-group">
            {todos.length > 0 ? (
              todos.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center position-relative"
                >
                  {item.todo}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger delete-btn"
                    onClick={() => deleteTask(item.id)}
                    aria-label={`Eliminar tarea ${item.todo}`}
                  >
                    ×
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center text-muted">
                No hay tareas, añadir tareas
              </li>
            )}
            <li className="list-group-item text-end text-muted">
              {todos.length
                ? `${todos.length} tarea${todos.length !== 1 ? 's' : ''} pendiente${todos.length !== 1 ? 's' : ''}`
                : ''}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
