import { useState, useEffect } from "react";

function UseEffectTest() {
    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log("Value changed: ", value);


    }, [value]);
    useEffect(() => {
        console.log("Something changed: ", something);
    }, [something]);
    useEffect(() => {
        async function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });

        }
        fetchData();
    }, [data])

    return (
        <div>
            {value}
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
            {something}
            <button onClick={() => setSomething(something + 1)}>Increment Something</button>
            <button onClick={() => setSomething(something - 1)}>Decrement Something</button>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UseEffectTest;