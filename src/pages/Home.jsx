import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'components/services/getMovies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const updateMovies = async () => {
      const movies = await getTrendingMovies();
      setMovies(movies);
    };
    updateMovies();
  }, []);

  return (
    <main>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
