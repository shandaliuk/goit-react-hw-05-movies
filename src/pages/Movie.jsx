import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getImageLink, getSingleMovie } from 'components/services/getMovies';

export const Movie = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [image, setImage] = useState('');

  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const movie = await getSingleMovie(movieId);
      const image = await getImageLink(movie.poster_path);
      setMovieInfo(movie);
      setImage(image);
    };
    getMovie();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { title, vote_average, overview, genres } = movieInfo;

  return (
    <main>
      <button type="button">Go back</button>
      <img src={image} alt={`Movie ${title} poster`} width="250" />
      <h2>{title}</h2>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
