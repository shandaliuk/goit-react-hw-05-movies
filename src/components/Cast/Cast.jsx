import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/getMovies';
import { CastList, ListItem, Image } from './Cast.styled';

const Cast = ({ imageBaseLink }) => {
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
    <CastList>
      {cast.map(actor => {
        return (
          <ListItem key={actor.id}>
            <Image
              src={
                actor.profile_path
                  ? `${imageBaseLink}${actor.profile_path}`
                  : 'https://img.icons8.com/ios/512/gender-neutral-user--v1.png'
              }
              alt={actor.name}
              width="150"
            />
            <div>
              <h2>{actor.name}</h2>
              <p>Character: {actor.character}</p>
            </div>
          </ListItem>
        );
      })}
    </CastList>
  );
};

Cast.propTypes = {
  imageBaseLink: PropTypes.string.isRequired,
};

export default Cast;
