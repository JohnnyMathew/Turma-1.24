import React, { useState } from 'react';
import Categoria from './components/categoria';
import DetalhesCategoria from './components/detalhescategoria';
import './App.css';

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  const categorias = {
    frutas: ['Maçã', 'Banana', 'Laranja'],
    verduras: ['Alface', 'Couve', 'Espinafre'],
    legumes: ['Cenoura', 'Batata', 'Abobrinha']
  };

  return (
    <div className="App">
      <h1>Feira de Categorias</h1>
      <Categoria setCategoriaSelecionada={setCategoriaSelecionada} />
      <DetalhesCategoria 
        categoria={categoriaSelecionada} 
        itens={categorias[categoriaSelecionada]} 
      />
    </div>
  );
}

export default App;
