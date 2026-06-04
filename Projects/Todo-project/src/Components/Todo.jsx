import React from 'react'

const Todo = ({todo,deleteTodo,finishedTodo}) => {
  return (
    <>
      <div className="container">
      <div className="todo">
          <p>{todo}</p>
          </div>
          <div className="actions">
            <button className="finish">finish</button>
            <button className="del" onClick={()=>deleteTodo(todo)}>delete</button>
          </div>
        </div>
    </>
  )
}

export default Todo