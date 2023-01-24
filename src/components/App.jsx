import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createImageBaseLink } from '../services/getMovies';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Error = lazy(() => import('pages/Error/Error'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={<Movie imageBaseLink={imageBaseLink} />}
          >
            <Route
              path="cast"
              element={<Cast imageBaseLink={imageBaseLink} />}
            />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
