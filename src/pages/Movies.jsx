import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesByName } from 'components/services/getMovies';

export const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = event => setInput(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const movies = await getMoviesByName(input);
    setMovies(movies);
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
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
