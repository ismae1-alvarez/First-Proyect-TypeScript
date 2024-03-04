import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import ListTask from "./components/ListTask";
import "./App.css"
import { Todo } from "./model";




const  App: React.FC = ()=> {  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if (todo) {

      setTodos([...todos, {id : Date.now(), todo, isDone : false}]);
      setTodo("");
    };
  };


  return (
    <div className="bg-fondo h-screen w-screen flex flex-col items-center font-cursi ">
      <span className="text-white z-10 m-30 uppercase md:text-3xl md:m-10 text-xl">
        Taskify 
      </span>

      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      <ListTask todos={todos} setTodos={setTodos}/>
      
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>

      ))} */}

    </div>
  );
};

export default App;
