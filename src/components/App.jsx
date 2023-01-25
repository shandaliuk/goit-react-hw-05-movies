import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Error = lazy(() => import('pages/Error/Error'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
