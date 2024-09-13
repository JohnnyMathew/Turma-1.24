import React from 'react';
import './App.css';

// Componente Filme
const Filme = ({ titulo, genero }) => {
  return (
    <div className="filme-card">
      <h2>{titulo}</h2>
      <p><strong>Gênero:</strong> {genero}</p>
    </div>
  );
};

// Componente Principal (App)
const App = () => {
  return (
    <div className="app-container">
      <h1>Lista de Filmes</h1>
      <Filme titulo="Vingadores: Ultimato" genero="Ação" />
      <Filme titulo="Divertida Mente" genero="Comédia" />
      <Filme titulo="À Procura da Felicidade" genero="Drama" />
    </div>
  );
};

export default App;