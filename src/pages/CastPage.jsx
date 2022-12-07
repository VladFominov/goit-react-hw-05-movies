import { getCast } from 'components/Services/api';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastInfo, CastPageWrapper } from './Styled';

function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const cast = await getCast(movieId);
        setCast(cast);
        console.log(cast);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchCastDetails(movieId);
  }, [movieId]);

  return (
    <CastPageWrapper>
      {cast?.cast?.map(({ cast_id, character, name, profile_path }) => {
        return (
          <CastInfo key={cast_id}>
            <img
              width="100"
              alt="img"
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            />
            <span>{name}</span>
            <span>Character: {character}</span>
          </CastInfo>
        );
      })}
    </CastPageWrapper>
  );
}

export default CastPage;
