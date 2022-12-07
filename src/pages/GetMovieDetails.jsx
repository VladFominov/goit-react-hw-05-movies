import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getMovieById } from '../components/Services/api';
import { Span, Wrapper, WrapperGetMovie } from './Styled';

const LazyCastPage = lazy(() => import('../pages/CastPage'));
const LazyReviewsPage = lazy(() => import('../pages/ReviewsPage'));

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  const handleBackBtn = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const getMovie = await getMovieById(movieId);
        console.log(getMovie);
        setMovie(getMovie);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <WrapperGetMovie>
      <div>
        <button onClick={handleBackBtn} type="button">
          Back
        </button>
      </div>
      <Wrapper>
        <img
          width="170"
          alt="img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div>
          <p>
            <b>{movie.original_title}</b>
          </p>
          <span>Vote average: {movie.vote_average}</span>
          <p>
            <b>Overview</b>
          </p>
          <span>{movie.overview}</span>
          <p>
            <b>Genres</b>
          </p>
          <div>
            {movie?.genres?.map(({ id, name }) => {
              return <Span key={id}>{name}</Span>;
            })}
          </div>
        </div>
      </Wrapper>

      <p>
        <b>Additional Information</b>
      </p>
      <div>
        <Link to={`cast`}>Cast</Link>
      </div>

      <div>
        <Link to={`reviews`}>Reviews</Link>
      </div>
      <Suspense>
        <Routes>
          <Route path="reviews" element={<LazyReviewsPage />}></Route>
        </Routes>
      </Suspense>
      <Suspense>
        <Routes>
          <Route path="cast" element={<LazyCastPage />}></Route>
        </Routes>
      </Suspense>
    </WrapperGetMovie>
  );

  // );
}

export default MovieDetails;
