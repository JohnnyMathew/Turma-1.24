import React from 'react';
import './App.css';

// Componente Filme
const Filme = ({ children }) => {
  console.log('Children:', children);
  
  return (
    <div className="filme-card">
      {children}
    </div>
  );
};

// Componente Principal (App)
const App = () => {
  const filmes = [
    { titulo: "Vingadores: Ultimato", genero: "Ação" },
    { titulo: "Divertida Mente", genero: "Comédia" },
    { titulo: "À Procura da Felicidade", genero: "Drama" }
  ];

  return (
    <div className="app-container">
      <h1>Lista de Filmes</h1>
      <ol>
        {filmes.map((filme, index) => (
          <li key={index}>
            <Filme>
              <h2>{filme.titulo}</h2>
              <p><strong>Gênero:</strong> {filme.genero}</p>
            </Filme>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
