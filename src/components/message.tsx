import React from 'react'
import { Todos } from '../type/Type'
import './message.css'

type Props={
    todos:Todos[],
    deleteMessage:(id:number)=>void
}

const Message:React.FC<Props> = ({todos,deleteMessage}) => {
  return (
    <div>
      {
        todos.map((elem,i)=>(
            <div className='Map' key={i}>{elem.message} 
            <button onClick={()=>deleteMessage(elem.id)} style={{cursor:'pointer'}}>x</button>
            </div>
        ))
      }
    </div>
  )
}

export default Message
