import React, { useState } from 'react';
import './App.css';


const SeletorCores = () => {
  const [corSelecionada, setCorSelecionada] = useState('white');
  const [corEmUso, setCorEmUso] = useState(null);

  const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  const handleCorClick = (cor) => {
    setCorSelecionada(cor);
    setCorEmUso(cor);
  };

  return (
    <div className="seletor-cores">
      <div className="painel-conteudo" style={{ backgroundColor: corSelecionada }}>
        <p>{corEmUso ? `Cor selecionada: ${corEmUso}` : 'Selecione uma cor'}</p>
      </div>
      <div className="circulos">
        {cores.map((cor) => (
          <div 
            key={cor} 
            className={`circulo ${cor === corEmUso ? 'selecionado' : ''}`} 
            style={{ backgroundColor: cor }}
            onClick={() => handleCorClick(cor)}
          />
        ))}
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="app-container">
      <h1>Seletor de Cores</h1>
      <SeletorCores />
    </div>
  );
};

export default App;
