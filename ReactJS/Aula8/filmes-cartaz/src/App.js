import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Filmes da Semana</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - Nota: {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
