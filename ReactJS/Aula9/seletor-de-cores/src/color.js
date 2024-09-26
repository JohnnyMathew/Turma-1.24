import React, { useState } from 'react';
import './color.css';

const color = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Cor padrão inicial


  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF69B4', '#FFC300'];

  return (
    <div className="color-picker">
      <div className="color-options">
        {colors.map((color) => (
          <div
            key={color}
            className="color-ball"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
      <div className="color-panel" style={{ backgroundColor: selectedColor }}>
        <p>Cor selecionada: {selectedColor}</p>
      </div>
    </div>
  );
};

export default color;