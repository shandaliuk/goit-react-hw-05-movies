import { Outlet } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';
import { Header, NavList, NavigationLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">
                <SiThemoviedatabase />
                Home
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
