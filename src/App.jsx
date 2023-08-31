import { useEffect, useState } from "react"
import Todo from "./Todo"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query,  updateDoc, } from 'firebase/firestore';
import {db} from './fireBase'

function App() {
const [todos ,setTodos]=useState([])
const [input,setInput]=useState('')
console.log(input)
// create todo
const createTodo =async (e)=>{
  e.preventDefault(e)
  if((input.trim().length!==0)==false){
    alert('Please enter a valid todo')
    return;
  }
  await addDoc(collection(db,'todos'),{
    text:input,
    completed:false,
  });
  setInput('');
};
// Read todo from firebase
useEffect(()=>{
  const q = query(collection(db, "todos"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = [];
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(),id: doc.id});
    });
    setTodos(todosArr)
  });
  return ()=>unsubscribe();
},[])
// Update todo in firebase
const toggleComplete= async (todo) => {
  await updateDoc(doc(db,"todos",todo.id),{
    completed:!todo.completed,
  });
};
// Delete todo
const deleteTodo=async (id)=>{
  await deleteDoc(doc(db,'todos',id))
}
  return (
  <div className=' p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  h-screen w-screen '>
      <div className="bg-slate-100 max-w[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 p-2">Todo App</h3>
        <form onSubmit={createTodo} className="flex justify-between">
          <input value={input} onChange={(e)=>setInput(e.target.value)} className="border p-4 mt-2 w-full" type="text" placeholder="Add Todo" />
          <button className="rounded-lg p-4 mx-2 mt-2 bg-purple-500 text-slate-100">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo,index)=>(
            <Todo  key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}/>
          ))}
        </ul>
        {
          todos.length<1 ? null:(
            <p className="text-center p-2">{`You have ${todos.length} todos `}</p>
          )
        }
       
      </div>
  </div>
  )
}

export default App
