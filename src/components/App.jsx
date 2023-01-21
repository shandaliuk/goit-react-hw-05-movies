import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Movie } from 'pages/Movie';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { createImageBaseLink } from './services/getMovies';

export const App = () => {
  const [imageBaseLink, setImageBaseLink] = useState('');

  useEffect(() => {
    const getLink = async () => {
      const link = await createImageBaseLink();
      setImageBaseLink(link);
    };
    getLink();
  }, [imageBaseLink]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route
          path="movies/:movieId"
          element={<Movie imageBaseLink={imageBaseLink} />}
        >
          <Route path="cast" element={<Cast imageBaseLink={imageBaseLink} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

// Additional route for 404
