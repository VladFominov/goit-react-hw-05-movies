import React, {lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { CardColumns } from 'reactstrap';
import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetails from '../pages/GetMovieDetails';
// import { MovieDetails } from './GetMovieDetails/GetMovieDetails';
import { StyledNavLink } from './Styled';

const LazyMoviesPage = lazy(() => import('../pages/MoviesPage'));
const LazyMoviesDetails = lazy(() => import('../pages/GetMovieDetails'));
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<LazyMoviesPage />}></Route>
          <Route
            path="movies/:movieId/*"
            element={<LazyMoviesDetails />}
          ></Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};
