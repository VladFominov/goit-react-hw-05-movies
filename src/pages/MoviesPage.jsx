import { getMovieByName } from 'components/Services/api';
import React, { useEffect, useState } from 'react';

import { Link, Outlet, useSearchParams, } from 'react-router-dom';
import {Form} from '../components/MoviesPageForm/Form'

import { Li } from './Styled';

function Movies() {
  const [searchParams,setSearchParams] = useSearchParams()
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // const query = searchParams.get('query') ?? "";

  const getInputData = movieName => {
     setMovieName(movieName);
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    const fetchMoviesByName = async () => { 
       try {
        setIsLoading(true);
         const movies = await getMovieByName(movieName);
         console.log(movies)
        setMovies(movies);
      } catch (error) {
          setError(error.message);
      } finally {
          setIsLoading(isLoading);
        };
    }
movieName && fetchMoviesByName();   
    // eslint-disable-next-line
  }, [movieName]);

  return (
    <section>
      <Form getInputData={getInputData} />
      <ul>
        {movies?.results?.map(({ id, title }) => {
          return (
            <Li key={id}>
              <Link to={`/movies/${id}`}> {title}</Link>
            </Li>
          );
        })}
      </ul>
      <Outlet />
     
    </section>
  );
}

export default Movies;