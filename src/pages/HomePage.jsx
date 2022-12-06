import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Li } from './Styled';

// import { Spinner } from 'reactstrap';
import { getTrending } from '../components/Services/api';
import { Tittle } from './Styled';


function HomePage() {
  const [trendings, setTrendings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const trendings = await getTrending();
        setTrendings(trendings.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <section>
      <Tittle>Tranding today</Tittle>

      <ul>
        {trendings.map(({ id, title }) => {
          return (
            <Li key={id}>
              <Link to={`/movies/${id}`}> {title}</Link>
            </Li>
          );
        })}
      </ul>
    </section>
  );
}

export default HomePage;
