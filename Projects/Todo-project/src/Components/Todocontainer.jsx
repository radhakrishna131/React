import React from 'react'
import Todo from './Todo.jsx'
const Todocontainer = ({ Todos, deleteTodo, finishedTodo }) => {
  return (
    <>
      
        {Todos.map((todo)=>{
          return(
          <Todo todo={todo} deleteTodo={deleteTodo} finishedTodo={finishedTodo}/>
          )
        })}
    </>
  )
}

export default Todocontainer