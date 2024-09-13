import React from 'react';


const Recebidas = ({ pacotes }) => {
  return (
    <div>
      <h2>Encomendas Recebidas</h2>
      {pacotes.length > 0 ? (
        pacotes.map((pacote, index) => (
          <div key={index} style={styles.pacoteCard}>
            <p><strong>ID:</strong> {pacote.id}</p>
            <p><strong>Remetente:</strong> {pacote.remetente}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma encomenda recebida.</p>
      )}
    </div>
  );
};


const EmTransporte = ({ pacotes }) => {
  return (
    <div>
      <h2>Encomendas em Transporte</h2>
      {pacotes.length > 0 ? (
        pacotes.map((pacote, index) => (
          <div key={index} style={styles.pacoteCard}>
            <p><strong>ID:</strong> {pacote.id}</p>
            <p><strong>Destino:</strong> {pacote.destino}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma encomenda em transporte.</p>
      )}
    </div>
  );
};


const Entregues = ({ pacotes }) => {
  return (
    <div>
      <h2>Encomendas Entregues</h2>
      {pacotes.length > 0 ? (
        pacotes.map((pacote, index) => (
          <div key={index} style={styles.pacoteCard}>
            <p><strong>ID:</strong> {pacote.id}</p>
            <p><strong>Destinatário:</strong> {pacote.destinatario}</p>
            <p><strong>Recebido por:</strong> {pacote.recebidoPor}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma encomenda entregue.</p>
      )}
    </div>
  );
};


const App = () => {
  const pacotesRecebidos = [
    { id: '001', remetente: 'Loja A' },
    { id: '002', remetente: 'Loja B' }
  ];

  const pacotesEmTransporte = [
    { id: '003', destino: 'Rua X, 123' },
    { id: '004', destino: 'Avenida Y, 456' }
  ];

  const pacotesEntregues = [
    { id: '005', destinatario: 'João', recebidoPor: 'João' },
    { id: '006', destinatario: 'Maria', recebidoPor: 'Outra pessoa do endereço' }
  ];

  return (
    <div style={styles.container}>
      <Recebidas pacotes={pacotesRecebidos} />
      <EmTransporte pacotes={pacotesEmTransporte} />
      <Entregues pacotes={pacotesEntregues} />
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  pacoteCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px auto',
    width: '300px',
    textAlign: 'left'
  }
};

export default App;
