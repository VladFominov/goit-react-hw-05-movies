import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieById } from '../Services/api';

export function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  const [id, setId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const getMovie = await getMovieById(movieId);
        setId(getMovie);
        console.log(getMovie);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  // return <section>{Object.entries(getMovie).map}</section>;

  // return {(getMovie.map(({ backdrop_path, title, vote_average, overview, genres }) => {
  //    <section>
  //      <div>
  //        <button type="button">Back</button>;
  //      </div>
  //      <div>
  //        <div>
  //          <a href={backdrop_path}></a>
  //        </div>
  //        <title>{title}</title>
  //        <span>{vote_average}</span>
  //        <p>
  //          <b>Overview</b>
  //        </p>
  //        <span>{overview}</span>
  //        <p>
  //          <b>Genres</b>
  //        </p>
  //        <span>{genres}</span>
  //      </div>
  //    </section>;}
  // })

  // );
}
