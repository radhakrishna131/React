import React,{useState} from 'react';
import Inputcontainer from './Components/Inputcontainer.jsx';
import Todocontainer from './Components/Todocontainer.jsx';
import './App.css';
const App = () => {
  const [value,setValue]=useState('');
  const [todo,setTodo]=useState([]);
  function writeTodo(e){
    setValue(e.target.value);
  }
  function addTodo(){
    if(value!=''){
      setTodo((prev)=>[...prev, value]);
      setValue('');
    }
  }
  function deleteTodo(taskName){
    setTodo((tasks)=>tasks.filter(task=> task!=taskName));
  }
  function finishedTodo(taskName){
    taskName='finished';
  }
  return (
    <>
      <div className="heading">
        <h1>Todo Website</h1>
      </div>
      <Inputcontainer inValue={value} write={writeTodo} add={addTodo}/>
      <Todocontainer Todos={todo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App

