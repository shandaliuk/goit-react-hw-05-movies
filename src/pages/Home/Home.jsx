import { useState, useEffect } from 'react';
import { RiMovie2Fill } from 'react-icons/ri';
import { getTrendingMovies } from 'services/getMovies';
import { List, ListLink } from './Home.styled';

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
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <ListLink to={`movies/${movie.id}`}>
            <RiMovie2Fill />
            {movie.title}
          </ListLink>
        </li>
      ))}
    </List>
  );
};
