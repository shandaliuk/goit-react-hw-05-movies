import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByName } from 'components/services/getMovies';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const query = searchParams.get('query');
      if (!query) {
        setMovies([]);
        return;
      }
      const movies = await getMoviesByName(query);
      setMovies(movies);
    };
    getMovies();
  }, [searchParams]);

  const handleChange = event => setInput(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    if (input.trim() === '') {
      window.alert('Type the name of the movie!');
      setInput('');
      return;
    }
    setSearchParams({ query: input });
    setInput('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
