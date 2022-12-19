import React, { useState } from 'react'


function ToDo() {
      
  const [todos, settodos] = useState([]);
  const [inputValue, setInputValue] =useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const onClick = (e) => {
    e.preventDefault();
    if(todos.find((todo) => todo.todoName === inputValue)){
      setInputValue("");
      alert("try again")
      return;
    }
    if(inputValue === ""){
      alert("add something")
      return;
    }
    settodos([...todos, {todoName : inputValue, isdone: false}]);
    setInputValue("");
  };
  





  return (
    <div>
      
      <input value={inputValue} placeholder="add sometning" onChange={handleChange}/>
      <button addTask={onClick}>Add</button>
      <button onClick={onClick}>Delete</button>
      
      
      <div>
        <ul>
          {todos.map((item) => {
            return <li>
              {item.todoName}
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ToDo
