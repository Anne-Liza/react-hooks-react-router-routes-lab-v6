import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
      </header>
      <main>
        <h2>Genres:</h2>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
