import { getMovieByName } from 'components/Services/api';
import React, { useEffect, useState } from 'react';

import { Outlet, useParams } from 'react-router-dom';
import {Form} from '../components/MoviesPageForm/Form'

function Movies() {
  const { title } = useParams();
  
  const [movieName, setMovieName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getInputData = movieName => {
    setMovieName(movieName);
  };

  useEffect(() => {
    const fetchMoviesByName = async () => { 
       try {
        setIsLoading(true);
         const movies = await getMovieByName(movieName);
         console.log(movies)
        setMovieName(movies);
      } catch (error) {
          setError(error.message);
      } finally {
          setIsLoading(isLoading);
        };
    }
fetchMoviesByName();   
    // eslint-disable-next-line
  }, [movieName]);


  
  
  
  return (
    <section>
      <div>
        {title}
      </div>
      <Form getInputData={getInputData} />
      <Outlet />
    </section>
  );
}

export default Movies;