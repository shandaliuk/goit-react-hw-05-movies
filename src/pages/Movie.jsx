import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getSingleMovie } from 'components/services/getMovies';

export const Movie = ({ imageBaseLink }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await getSingleMovie(movieId);
      setMovieInfo(movie);
    };
    getMovie();
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { title, vote_average, overview, genres, poster_path } = movieInfo;

  return (
    <main>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {poster_path && (
        <img
          src={`${imageBaseLink}${poster_path}`}
          alt={`Movie ${title} poster`}
          width="250"
        />
      )}
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
