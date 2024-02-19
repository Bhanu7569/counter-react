import React, { useState } from 'react'


function todolist ()  {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState("")
    const handleEdit = () =>{

    }
    const handleDelete = () =>{
        
    }
    const handleAdd = () =>{
        settodos([...todos, {todo, isCompleted: false}])
        settodo("")
    }
    const handleChange = (e) =>{
        settodo(e.target.value)
    }
  return (
    <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
        <div className="addTodo my-5">
            <h2>Add Todo</h2>
        <h2 className='text-xl'>Todo List</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-80' />
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>YOur Todos</h2>
        <div className="todos">
        <div className="todo flex" >
            <div className="text">my todo</div>
                <div className="buttons">
                    <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1'>Edit</button>
                    <button onClick= {handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1'>Delete</button>
                </div>
            
        </div>
        </div>
        
    </div>
    
  )
}

export default todolist
