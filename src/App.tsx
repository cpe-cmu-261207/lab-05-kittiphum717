import React from 'react';
import { useState } from 'react'
import Footer from './footer';
import Header from './header';
import Todo from './todo';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [todo,setTodo] = useState("");

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    setTodo(ev.key)
    console.log(ev.key)
  }

  return (
    <div>

      {/* header section */}
      <Header></Header>
      {/* <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Kittiphum Sanit 630610717</span>
      </div> */}

      {/* todo section */}
      <Todo></Todo>
      {/* <div className='mx-auto max-w-4xl'> */}

        {/* task input and add button */}
        {/* <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl' 
            type="text"
            onKeyDown={onKeyDownCallback}
            id='input'></input>
          <button className='border border-gray-400 w-8 font-bold'>+</button>
        </div> */}

        {/* tasks section */}
        {/* <div> */}
          {/* Please convert this into a task component */}
          
        {/* </div> */}
      {/* </div> */}

      {/* footer section */}
      <Footer></Footer>
      {/* <p className='text-center text-gray-400'> copyright © 2021  </p> */}
    </div>
  );
}

export default App;
