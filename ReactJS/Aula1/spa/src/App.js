import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Menu Superior */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Página Pessoal
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Card com informações */}
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Nome do Aluno
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Time Favorito: Palmeiras
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
