import React, {useState} from 'react';
import './App.css';
import Auth from './Auth';
import InputField from './InputField';

const App:React.FC =()=> {

  const [todo,setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span>Taskify</span>
      <InputField todo ={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
