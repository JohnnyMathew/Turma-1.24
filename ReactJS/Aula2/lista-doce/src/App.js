import React from 'react';
import './App.css';

function App() {
  const doces = ['Brigadeiro', 'Beijinho', 'Quindim', 'Cocada', 'Pudim'];

  return (
    <div className="app">
      <h1>Lista de Doces</h1>
      <ul className="doce-list">
        {doces.map((doce, index) => (
          <li key={index} className={`doce-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
            {doce}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
