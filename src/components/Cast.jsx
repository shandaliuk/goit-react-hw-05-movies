import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, getImageLink } from './services/getMovies';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const imageBaseLink = useRef('');

  useEffect(() => {
    const getActors = async () => {
      const actors = await getCast(movieId);
      setCast(actors);
    };
    getActors();
  }, [movieId]);

  useEffect(() => {
    const getLink = async () => {
      const link = await getImageLink();
      imageBaseLink.current = link;
    };
    getLink();
  }, [imageBaseLink]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={`${imageBaseLink.current}${actor.profile_path}`}
              alt={actor.name}
              width="150"
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
