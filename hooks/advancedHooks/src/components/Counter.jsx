import { useReducer, useRef, useState } from "react"
import { initialState,counterReducer } from "../counterReducer"
const Counter = ()=> {

    // const  
    const [state , dispatch ]=useReducer(counterReducer, initialState);

    const [intputValue, setInputValue] = useState(0);
    const inputRef = useRef(null);
    console.log(inputRef);


    return <div>
        Counter Component
        <h2>Count : {state.count}</h2>
        <button onClick={() => {dispatch({ type: 'increment' })
    console.log("BUTTON CLICKED")}}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        amount :<input type="number" value={intputValue} onChange={e=> setInputValue(e.currentTarget.value)} />
        <button onClick={()=> dispatch({type : 'incrementByAmount', payload : +intputValue})}>Increment By amount </button>
        <button onClick={()=> dispatch({type : 'decrementByAmount', payload : +intputValue})}>Decrement By amunt</button>
        {/* <input type="number" name="" id="" /> */}
        <input type="text" ref={inputRef} />
        <button onClick={()=>{
            inputRef.current.focus();
            inputRef.current.value = "Sanidhya andfiahsidfhia";

        }}>Focus and write sanidhya </button>
    </div>
}


export default Counter;