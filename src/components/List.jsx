import React from 'react'

export const List = ({todos = [], handleConfirm, deleteTodo}) => {
  return (
    <section className="list">
        <ul>
          {todos.map((todo) =>
            <div key={todo.id}>
              <li>
                <span className={todo.confirmed ? 'ready-todo' : ''}>{todo.text}</span>


                <button onClick={() => handleConfirm(todo.id)}>
                  Ready
                </button>

                <button onClick={() => deleteTodo(todo.id)} className="deleteTodo">
                  Delete
                </button>
              </li>
            </div>)}
        </ul>
      </section>
  )
}
