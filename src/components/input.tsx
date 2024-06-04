import React from 'react'

type IProps={
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    addMessage:()=>void
}

const Input:React.FC<IProps> = ({todo,setTodo,addMessage}) => {
  return (
    <div>
      <input type="text" placeholder='Fill...' value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={addMessage}>Add</button>
    </div>
  )
}

export default Input
