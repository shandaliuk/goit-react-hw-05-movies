import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './services/getMovies';

export const Cast = ({ imageBaseLink }) => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getActors = async () => {
      const actors = await getCast(movieId);
      setCast(actors);
    };
    getActors();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `${imageBaseLink}${actor.profile_path}`
                  : 'https://img.icons8.com/ios/512/gender-neutral-user--v1.png'
              }
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
