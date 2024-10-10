import React from 'react';

function DetalhesCategoria({ categoria, itens }) {
  return (
    <div>
      {categoria ? (
        <>
          <h2>Itens de {categoria}:</h2>
          <ul>
            {itens && itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Selecione uma categoria para ver os itens.</p>
      )}
    </div>
  );
}

export default DetalhesCategoria;