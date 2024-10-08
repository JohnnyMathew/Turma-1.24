import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [color, setColor] = useState('#ffef85');
  const [isFontColor, setIsFontColor] = useState(false);

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { text: noteText, color, isFontColor }]);
      setNoteText('');
    }
  };

  return (
    <div className="app-container">
      <h1>Quadro de Notas</h1>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Escreva sua nota" 
          value={noteText} 
          onChange={(e) => setNoteText(e.target.value)} 
        />
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
        <label>
          <input 
            type="checkbox" 
            checked={isFontColor} 
            onChange={() => setIsFontColor(!isFontColor)} 
          />
          Aplicar cor à fonte
        </label>
        <button onClick={addNote}>Adicionar Nota</button>
      </div>
      <div className="notes-board">
        {notes.map((note, index) => (
          <div 
            key={index} 
            className="note" 
            style={{
              backgroundColor: !note.isFontColor ? note.color : '#ffef85',
              color: note.isFontColor ? note.color : '#000'
            }}
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
