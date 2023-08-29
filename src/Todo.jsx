import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

export default function Todo (Props) {
  const {todo,toggleComplete,deleteTodo}=Props

  return (
    <li className={todo.completed?'flex justify-between bg-slate-200 p-4 my-2 capitalize' : 'flex justify-between bg-slate-400 p-4 my-2 capitalize'}>
    <div className='flex'>
        <input type="checkbox" className='mt-2 mx-4 cursor-pointer'/>
        <p onClick={() => toggleComplete(todo)} className={todo.completed ?"mt-2 cursor-pointer" :"mt-2 cursor-pointer line-through "}>{todo.text}</p>
    </div>
    <button className='cursor-pointer' onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>
    </li>
  )
}
//  Todo
  {/* <li className=''>
<div className=''>
    <input type="checkbox" />
    <p>{todo}</p>
</div>
</li> */}