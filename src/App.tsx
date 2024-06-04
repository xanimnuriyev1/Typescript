
import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import {Todos} from '../src/type/Type'
import Message from './components/message';

const App:React.FC=()=> {
 const [todo,setTodo]=useState<string>('')
 const [todos,setTodos]=useState<Todos[]>([])

 const addMessage=()=>{
  if(todo) setTodos([...todos,{message:todo,id:todos.length+1}])
    setTodo('')
 }
const deleteMessage=(id:number)=>{
setTodos(todos.filter(elem=>elem.id != id))
}

 console.log(todos);
 
  return (
    <div className="App">
   <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
   <Message deleteMessage={deleteMessage} todos={todos}/>
    </div>
  );
}

export default App;
