import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Movie } from 'pages/Movie';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
