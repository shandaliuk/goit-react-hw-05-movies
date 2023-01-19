import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </nav>
  );
};
