import { useEffect, useRef } from "react"

function FocusInput() {
    const inputRef = useRef(null);

    // inputRef.current.value  = "Sanidhya";\
    useEffect(()=>{
        if(inputRef.current) {
            inputRef.current.value = "Sanidhya";


        }

    },[]);
    
    

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{
                inputRef.current.focus();

            }}>Focus !!</button>
        </div>
    )
}


export default FocusInput;