import React from 'react';

interface Props{
    todo: string; 
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<Props> = ({todo,setTodo}) => {
    return (
        <div>
            <form action="">
                <input 
                    type="input" 
                    value={todo}
                    onChange = {(e)=>setTodo(e.target.value)}
                    placeholder='Enter A Task' 
                />
                <button type='submit' >Go</button>
            </form>
        </div>
    )
}

export default InputField