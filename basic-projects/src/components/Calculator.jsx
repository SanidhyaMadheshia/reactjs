import { useState } from "react";
import "../css/Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const clear = () => {
    setInputValue("");
    setResult("");
  };
  
  const calculate = () => {
    try {
      const res = eval(inputValue);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };
  function del() {
    setInputValue(inputValue.slice(0,-1));
    
  }

  return (
    <form className="calculator" name="calc" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="value"
        value={result ? `${inputValue} = ${result}` : inputValue}
        readOnly
        
      />
      <span className="num clear" onClick={clear}>C</span>
      <span onClick={() => setInputValue(inputValue + "*")}>*</span>
      <span onClick={() => setInputValue(inputValue + "+")}>+</span>
      <span onClick={() => setInputValue(inputValue + "-")}>-</span>
      <span onClick={() => setInputValue(inputValue + "/")}>/</span>

      {[...Array(10).keys()].map((num) => (
        <span key={num} onClick={() => setInputValue(inputValue + num)}>{num}</span>
      ))}

      <span onClick={() => setInputValue(inputValue + ".")}>.</span>
      <span onClick={calculate}>=</span>
      <span onClick={del}>Del</span>
    </form>
  );
}

export default Calculator;
