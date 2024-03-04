import React, { useRef } from 'react';

interface Props {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e: React.FormEvent)=> void;
};

const InputFeild : React.FC<Props> = ({todo, setTodo, handleAdd})=> {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e)=> {
            handleAdd(e);
            inputRef.current?.blur();
          }}
          className=' flex w-11/12 relative items-center'>
          <input 
          ref={inputRef}
          type="input"  
          placeholder='Enter a task'  
          className='w-full rounded-full p-5 text-xl border-none transition duration-75 shadow-black focus:outline-none'
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
          />
        <button className='absolute h-12 w-12 m-1 rounded-full right-0 border-none bg-fondo text-white transition-all duration-75 shadow-xl shadow-black active:transform activite:scale-50  active:shadow-xl' type='submit'>
            Go
        </button>
    </form>
  );
};
export default InputFeild;