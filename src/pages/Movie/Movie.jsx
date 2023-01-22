import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getSingleMovie } from 'services/getMovies';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  SiteLink,
  MovieInfoWrapper,
  InfoWrapper,
  AdditionalInfo,
  LinksList,
  Image,
} from './Movie.styled';

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
      <SiteLink to={location.state?.from ?? '/'}>
        <IoMdArrowRoundBack />
        <span>Go back</span>
      </SiteLink>
      <MovieInfoWrapper>
        {poster_path && (
          <Image
            src={`${imageBaseLink}${poster_path}`}
            alt={`Movie ${title} poster`}
            width="300"
          />
        )}
        <InfoWrapper>
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
        </InfoWrapper>
      </MovieInfoWrapper>
      <AdditionalInfo>Additional information</AdditionalInfo>
      <LinksList>
        <li>
          <SiteLink to="cast" state={{ from: location.state?.from }}>
            Cast
          </SiteLink>
        </li>
        <li>
          <SiteLink to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </SiteLink>
        </li>
      </LinksList>
      <Outlet />
    </main>
  );
};
