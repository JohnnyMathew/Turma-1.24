import React from 'react';

const Cartao = ({ produto }) => {
  return (
    <div className="cartao">
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
    </div>
  );
};

export default Cartao;