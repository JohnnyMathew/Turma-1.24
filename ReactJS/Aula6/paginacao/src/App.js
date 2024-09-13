import React, { useState } from 'react';
import './App.css';

// Componente Paginação
const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>Página {currentPage}</span>
      <button 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próxima
      </button>
    </div>
  );
};

// Componente Principal (App)
const App = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="app-container">
      <h1>Paginação de Filmes</h1>
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
