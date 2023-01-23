import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { getMoviesByName } from 'services/getMovies';
import {
  Input,
  SubmitButton,
  Form,
  List,
  ListLink,
  Message,
} from './Movies.styled';

export const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [isSubmitted, setSubmission] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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
    setSubmission(true);
    setInput('');
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          value={input}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      {isSubmitted && movies.length === 0 ? (
        <Message>No movies found</Message>
      ) : (
        <List>
          {movies.map(movie => (
            <li key={movie.id}>
              <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MdLocalMovies />
                {movie.title}
              </ListLink>
            </li>
          ))}
        </List>
      )}
    </main>
  );
};

// Поставити, що якщо нема фільма то тоді тікі показуємо
