import { useState } from "react";

function Todo() {

    const [todos, setTodos]= useState([]);

    const [inputValue, setInputValue] = useState("");


    return <div>
        Todo 

        <input type="text" name="" id="" value={inputValue} onChange={(e)=>{
            e.preventDefault();

            setInputValue(e.target.value);

        }}/>

        <button onClick={()=>{
            setTodos([
                ...todos,
                inputValue
            ]);
            setInputValue("");
        }}>add</button>
        <ul>
            {todos.map((todo, index)=>{
                return <li key={index}>
                    {todo}
                    <button onClick={()=>{
                        const newTodos = todos.filter((_, i) => i !== index);
                        setTodos(newTodos);
                    }}>Delete</button>
                </li>
            })}
        </ul>

    </div>
}


export default Todo;

