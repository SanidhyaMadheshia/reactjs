import { useEffect, useState } from "react";
import axios from "axios";

function Meals() {
    const  [items , setItems ]= useState([]);
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((response)=>{
                console.log(response.data.meals);
                setItems(response.data.meals);
            });
    },[])
    return <div>
        Meals 
        <ul>
            {items.map((item , index)=>{
                return <li key={item.idMeal}>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <h3>{item.strMeal}</h3>
                    <p>{item.idMeal}</p>
                    <button onClick={()=>{
                        alert(`You clicked on ${item.strMeal}`);
                    }}>Click Me</button>
                </li>
            })}
        </ul>
    </div>
}

export default Meals;

