import React, { useState } from 'react';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const calculate = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Erro na expressão');
    }
  };

  return (
    <div>
      <h1>Calculadora de Expressões</h1>
      <input 
        type="text" 
        value={expression} 
        onChange={handleChange} 
        placeholder="Digite uma expressão"
      />
      <button onClick={calculate}>Calcular</button>
      {result !== null && <h2>Resultado: {result}</h2>}
    </div>
  );
}

export default App;
