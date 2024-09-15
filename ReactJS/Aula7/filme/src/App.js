import React, { useState } from 'react';
import './App.css';


const StatusFilme = ({ assistido, marcarAssistido }) => {
  return (
    <div>
      <span className="status">
        {assistido ? '✔️ Já assistido' : '❌ Não assistido'}
      </span>
      <br />
      <button onClick={marcarAssistido} disabled={assistido} className="botao">
        {assistido ? 'Conteúdo assistido' : 'Marcar como assistido'}
      </button>
    </div>
  );
};

const App = () => {
  const [titulo, setTitulo] = useState('O Poderoso Chefão');
  const [assistido, setAssistido] = useState(false);
  const [tipo, setTipo] = useState('Filme');

  const marcarAssistido = () => {
    setAssistido(true);
  };

  return (
    <div className="filme-container">
      <h1 className="titulo-filme">{titulo}</h1>
      <p className="tipo-conteudo">{tipo}</p> {}
      <label htmlFor="tipo">Selecione o tipo:</label>
      <select
        id="tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="select-tipo"
      >
        <option value="Filme">Filme</option>
        <option value="Série">Série</option>
      </select>
      <StatusFilme assistido={assistido} marcarAssistido={marcarAssistido} />
    </div>
  );
};

export default App;
