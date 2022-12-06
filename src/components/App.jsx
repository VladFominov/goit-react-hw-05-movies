import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { CardColumns } from 'reactstrap';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import { MovieDetails } from './GetMovieDetails/GetMovieDetails';
// import { MovieDetails } from './GetMovieDetails/GetMovieDetails';
import { StyledNavLink } from './Styled';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
