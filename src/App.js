import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setResult('');
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        className="input-field"
        value={input}
        onChange={handleInputChange}
      />
      <br />
      <div className="result">{result}</div>
      <br />
      <div className="button-row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>

      <div className="button-row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>

      <div className="button-row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>

      <div className="button-row">
      <button onClick={handleClear}>
          C
        </button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        {/* <button onClick={() => handleButtonClick('.')}>.</button> */}
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>

      <div className="button-row">
        
      </div>
    </div>
  );
};

export default App;
