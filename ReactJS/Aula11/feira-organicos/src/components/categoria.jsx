import React from 'react';

function categoria({ setCategoriaSelecionada }) {
  const handleChange = (e) => {
    setCategoriaSelecionada(e.target.value);
  };

  return (
    <div>
      <h2>Selecione uma categoria:</h2>
      <label>
        <input 
          type="radio" 
          value="frutas" 
          name="categoria" 
          onChange={handleChange} 
        />
        Frutas
      </label>
      <label>
        <input 
          type="radio" 
          value="verduras" 
          name="categoria" 
          onChange={handleChange} 
        />
        Verduras
      </label>
      <label>
        <input 
          type="radio" 
          value="legumes" 
          name="categoria" 
          onChange={handleChange} 
        />
        Legumes
      </label>
    </div>
  );
}

export default categoria;