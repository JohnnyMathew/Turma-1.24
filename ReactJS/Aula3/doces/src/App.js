import React from 'react';
import Cartao from './cartao';
import './App.css';

const App = () => {
  const produtos = [
    { id: 1, nome: 'Brigadeiro', preco: 2.50, imagem: 'https://via.placeholder.com/150' },
    { id: 2, nome: 'Beijinho', preco: 2.00, imagem: 'https://via.placeholder.com/150' },
    { id: 3, nome: 'Cajuzinho', preco: 3.00, imagem: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="vitrine">
      <h1>Loja de Doces</h1>
      <div className="produtos">
        {produtos.map(produto => (
          <Cartao key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default App;
