import { useEffect, useRef, useState } from "react"

function Timer() {

    const [count , setCount]= useState(0);

    const internalRef = useRef(null);

    useEffect(()=>{
        internalRef.current = setInterval(()=>{
            setCount((c)=> c+1);

        },1000);
        return ()=> {
            clearInterval(internalRef.current);
            internalRef.current = null;

        }
    },[])
    return <div>
        Timer : {count} seconds
        <button onClick={()=> {
            clearInterval(internalRef.current);
            internalRef.current = null;
        }}>stop</button>
        <button onClick={()=>{
            if(!internalRef.current) {
                // console.log(internalRef);

                // clearInterval(internalRef.current);

                internalRef.current = setInterval(()=>{
                    setCount((c)=> c+1);
                },1000);
            }
        }}>start</button>
    </div>
}
export default Timer;

