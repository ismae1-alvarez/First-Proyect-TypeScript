import React, { useEffect, useState } from 'react'
import { Todo } from '../model';

interface Props  { 
    todos : Todo[];
    setTodos  :  React.Dispatch<React.SetStateAction<Todo[]>>;
};

const  ListTask: React.FC<Props> = ({todos, setTodos} : Props)=> {
    const [valuesText, setValuesText] = useState<string>('');
    const [valuesId, setValuesId] = useState<number | null>(null);
    const [valuesIdFinish, setValuesIdFinish] = useState<number | null>(null);

    useEffect(()=>{

      if(valuesIdFinish){
        setTodos(changeValues=> changeValues.map((todo) =>  todo.id === valuesIdFinish ? {...todo, isDone: !todo.isDone} :todo ))
      };
      setValuesIdFinish(null);
    }, [valuesIdFinish]);


    const changeValues = (todoItem :  Todo)=>{
      setValuesText(todoItem.todo);
      setValuesId(todoItem.id);
    };

    // EditTask
    const editTask = (text : string)=>{
      if(text.trim() !== ''){
        setTodos(change=> 
            change.map(todo => todo.id === valuesId ? {...todo, todo : valuesText} : todo)
          );
          setValuesId(null);
      };
    };

    //FinishTask
    const finishTask = (todoItem : Todo )=>{
      setValuesIdFinish(todoItem.id);
    };
  
    // Delete Task
    const deleteTask = (todoItem : Todo)=>{
      if (todoItem) {
        const task = todos.filter(t => t.id !== todoItem.id);
        setTodos(task);
      };
    };
  
    

  
  return (
    <div className='flex flex-col gap-3 w-11/12  mt-1 '>
      {
        todos.map((t)=>(
          <div id ="ismael" className='bg-yellow-500 flex justify-between p-5 rounded-md items-center' key={t.id}>  
                
            {valuesId === t.id
              ?(
                <input 
                  type="text"
                  value={valuesText}
                  onChange={(e)=> setValuesText(e.target.value)}
                  onBlur={()=> editTask(valuesText)}
                  autoFocus
                 />
              )
              :(
                t.isDone ?(
                  <h2 className='text-xl underline decoration-wavy'>{t.todo}</h2>
                  ) : (
                  <h2 className='text-xl'>{t.todo}</h2>
                )
              )
            }

            <div className='flex gap-5'>
              <button 
                className='bg-blue-400 rounded p-2'
                onClick={()=> changeValues(t)}
                >
                Edit
              </button>
              <button 
                className='bg-green-400 rounded p-2'
                onClick={()=> finishTask(t)}
                >
                Finisher
              </button>
              <button 
                className='bg-red-700 rounded p-2'
                onClick={()=> deleteTask(t)}
                >
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};


export default ListTask;