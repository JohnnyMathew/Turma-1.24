import React from 'react';
import ColorPicker from './color'; // Importa o componente ColorPicker
import './App.css'; // Importa o CSS para o App

const App = () => {
  return (
    <div className="app">
      <h1>Seleção de Cores</h1>
      <ColorPicker />
    </div>
  );
};

export default App;
